import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, readFile, rename, stat, unlink } from 'node:fs/promises';
import express from 'express';
import multer from 'multer';
import {
  SignJWT,
  createRemoteJWKSet,
  exportJWK,
  importPKCS8,
  importSPKI,
  jwtVerify
} from 'jose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const BASE_URL = stripTrailingSlash(process.env.BASE_URL || '');
const CANVAS_CLIENT_ID = process.env.CANVAS_CLIENT_ID || '';
const CANVAS_ISSUER = process.env.CANVAS_ISSUER || 'https://canvas.instructure.com';
const CANVAS_AUTH_URL = process.env.CANVAS_AUTH_URL || 'https://sso.canvaslms.com/api/lti/authorize_redirect';
const CANVAS_JWKS_URL = process.env.CANVAS_JWKS_URL || 'https://sso.canvaslms.com/api/lti/security/jwks';
const CANVAS_DEPLOYMENT_ID = process.env.CANVAS_DEPLOYMENT_ID || '';
const LTI_KEY_ID = process.env.LTI_KEY_ID || 'sml3004-2026';
const RECORDING_DIR = process.env.RECORDING_DIR || '/tmp/sml3004-recordings';
const MAX_RECORDING_MB = Number(process.env.MAX_RECORDING_MB || 500);
const MAX_RECORDING_BYTES = MAX_RECORDING_MB * 1024 * 1024;
const STATE_TTL_MS = 10 * 60 * 1000;
const LAUNCH_TTL_MS = 60 * 60 * 1000;
const RECORDING_TTL_MS = 20 * 60 * 1000;

if (!BASE_URL) {
  throw new Error('BASE_URL is required. It must be the public HTTPS URL of this LTI service.');
}
if (!CANVAS_CLIENT_ID) {
  throw new Error('CANVAS_CLIENT_ID is required after the Canvas LTI Developer Key has been created.');
}

const privateKeyPem = await loadPrivateKeyPem();
const privateKey = await importPKCS8(privateKeyPem, 'RS256');
const publicKeyPem = crypto.createPublicKey(privateKeyPem).export({ type: 'spki', format: 'pem' });
const publicKey = await importSPKI(publicKeyPem, 'RS256');
const publicJwk = await exportJWK(publicKey);
publicJwk.use = 'sig';
publicJwk.alg = 'RS256';
publicJwk.kid = LTI_KEY_ID;

await mkdir(RECORDING_DIR, { recursive: true });

const canvasJwks = createRemoteJWKSet(new URL(CANVAS_JWKS_URL));
const states = new Map();
const launches = new Map();
const recordings = new Map();

const upload = multer({
  dest: RECORDING_DIR,
  limits: { fileSize: MAX_RECORDING_BYTES, files: 1 }
});

const app = express();
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false, limit: '2mb' }));
app.use(express.json({ limit: '2mb' }));
app.use(function securityHeaders(req, res, next) {
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Permissions-Policy', 'camera=(self), microphone=(self)');
  next();
});

app.get('/health', function (req, res) {
  res.json({ ok: true, service: 'SML3004 Canvas LTI prototype' });
});

app.get('/.well-known/jwks.json', function (req, res) {
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.json({ keys: [publicJwk] });
});

app.get('/canvas-config.json', function (req, res) {
  const base = BASE_URL;
  const domain = new URL(base).hostname;
  res.json({
    title: 'SML3004 Video Dialogue',
    description: 'Canvas LTI 1.3 prototype for recording and returning the SML3004 Year Abroad Tutor Post video directly to Canvas.',
    oidc_initiation_url: `${base}/lti/login`,
    target_link_uri: `${base}/lti/launch`,
    scopes: [],
    public_jwk_url: `${base}/.well-known/jwks.json`,
    extensions: [
      {
        domain,
        tool_id: 'sml3004-video-dialogue',
        platform: 'canvas.instructure.com',
        privacy_level: 'anonymous',
        settings: {
          text: 'SML3004 Video Dialogue',
          placements: [
            {
              placement: 'homework_submission',
              message_type: 'LtiDeepLinkingRequest',
              target_link_uri: `${base}/lti/launch`,
              text: 'SML3004 Video Dialogue',
              selection_width: 1220,
              selection_height: 900
            }
          ]
        }
      }
    ]
  });
});

app.all('/lti/login', function (req, res) {
  try {
    const input = Object.assign({}, req.query || {}, req.body || {});
    if (input.iss !== CANVAS_ISSUER) {
      return res.status(400).send('Unexpected Canvas issuer.');
    }
    if (!input.login_hint) {
      return res.status(400).send('Canvas login_hint is missing.');
    }
    if (input.client_id && input.client_id !== CANVAS_CLIENT_ID) {
      return res.status(400).send('Unexpected Canvas client_id.');
    }

    const state = randomToken(32);
    const nonce = randomToken(32);
    states.set(state, {
      nonce,
      createdAt: Date.now(),
      targetLinkUri: input.target_link_uri || `${BASE_URL}/lti/launch`
    });

    const authorizationUrl = new URL(CANVAS_AUTH_URL);
    authorizationUrl.searchParams.set('scope', 'openid');
    authorizationUrl.searchParams.set('response_type', 'id_token');
    authorizationUrl.searchParams.set('response_mode', 'form_post');
    authorizationUrl.searchParams.set('prompt', 'none');
    authorizationUrl.searchParams.set('client_id', CANVAS_CLIENT_ID);
    authorizationUrl.searchParams.set('redirect_uri', `${BASE_URL}/lti/launch`);
    authorizationUrl.searchParams.set('login_hint', String(input.login_hint));
    authorizationUrl.searchParams.set('state', state);
    authorizationUrl.searchParams.set('nonce', nonce);
    if (input.lti_message_hint) {
      authorizationUrl.searchParams.set('lti_message_hint', String(input.lti_message_hint));
    }

    res.redirect(302, authorizationUrl.toString());
  } catch (error) {
    console.error('LTI login error:', error);
    res.status(500).send('The LTI login could not be started.');
  }
});

app.post('/lti/launch', async function (req, res) {
  try {
    const state = String(req.body.state || '');
    const idToken = String(req.body.id_token || '');
    if (!state || !idToken) {
      return res.status(400).send('Canvas launch state or id_token is missing.');
    }

    const stateRecord = states.get(state);
    states.delete(state);
    if (!stateRecord || Date.now() - stateRecord.createdAt > STATE_TTL_MS) {
      return res.status(400).send('The Canvas launch state is missing or expired.');
    }

    const verified = await jwtVerify(idToken, canvasJwks, {
      issuer: CANVAS_ISSUER,
      audience: CANVAS_CLIENT_ID,
      algorithms: ['RS256']
    });
    const claims = verified.payload;

    if (claims.nonce !== stateRecord.nonce) {
      return res.status(400).send('The Canvas launch nonce did not match.');
    }

    const deploymentId = claims['https://purl.imsglobal.org/spec/lti/claim/deployment_id'];
    if (CANVAS_DEPLOYMENT_ID && deploymentId !== CANVAS_DEPLOYMENT_ID) {
      return res.status(403).send('This Canvas deployment is not authorised for the tool.');
    }

    const messageType = claims['https://purl.imsglobal.org/spec/lti/claim/message_type'];
    if (messageType !== 'LtiDeepLinkingRequest') {
      return res.status(400).send('This prototype expects a Canvas LtiDeepLinkingRequest from the homework submission placement.');
    }

    const deepLinkSettings = claims['https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings'];
    if (!deepLinkSettings || !deepLinkSettings.deep_link_return_url) {
      return res.status(400).send('Canvas did not provide deep linking return settings.');
    }
    if (Array.isArray(deepLinkSettings.accept_types) && !deepLinkSettings.accept_types.includes('file')) {
      return res.status(400).send('This Canvas launch does not accept file content items.');
    }

    const launchId = randomToken(32);
    launches.set(launchId, {
      createdAt: Date.now(),
      claims,
      deepLinkSettings
    });

    res.redirect(303, `${BASE_URL}/tool?launch_id=${encodeURIComponent(launchId)}`);
  } catch (error) {
    console.error('LTI launch validation error:', error);
    res.status(401).send('Canvas LTI launch validation failed.');
  }
});

app.get('/tool', async function (req, res) {
  const launchId = String(req.query.launch_id || '');
  const launch = getLiveLaunch(launchId);
  if (!launch) return res.status(401).send('This Canvas LTI launch is missing or expired.');

  try {
    const htmlPath = path.join(__dirname, 'index.html');
    let html = await readFile(htmlPath, 'utf8');
    const userName = typeof launch.claims.name === 'string' ? launch.claims.name : '';
    const injection = `\n<script>window.__SML3004_LTI__=${safeJsonForHtml({ launchId, userName })};</script>\n<script src="/lti-client.js"></script>\n`;
    html = html.replace('</body>', `${injection}</body>`);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.send(html);
  } catch (error) {
    console.error('Tool page error:', error);
    res.status(500).send('The SML3004 recorder could not be loaded.');
  }
});

app.get('/lti-client.js', async function (req, res) {
  try {
    const script = await readFile(path.join(__dirname, 'lti-client.js'), 'utf8');
    res.type('application/javascript').setHeader('Cache-Control', 'no-store');
    res.send(script);
  } catch (error) {
    res.status(500).send('');
  }
});

app.post('/api/recordings', upload.single('video'), async function (req, res) {
  try {
    const launchId = String(req.body.launch_id || '');
    const launch = getLiveLaunch(launchId);
    if (!launch) {
      await safeUnlink(req.file?.path);
      return res.status(401).json({ error: 'The Canvas launch has expired. Open the assignment submission again.' });
    }
    if (!req.file) return res.status(400).json({ error: 'No video recording was received.' });

    const recordingId = randomToken(32);
    const extension = '.webm';
    const finalPath = path.join(RECORDING_DIR, `${recordingId}${extension}`);
    await rename(req.file.path, finalPath);

    recordings.set(recordingId, {
      createdAt: Date.now(),
      expiresAt: Date.now() + RECORDING_TTL_MS,
      launchId,
      path: finalPath,
      filename: 'sml3004-video-dialogue.webm',
      mediaType: req.file.mimetype || 'video/webm'
    });

    res.json({
      return_to_canvas: `${BASE_URL}/lti/deep-link-submit?launch_id=${encodeURIComponent(launchId)}&recording_id=${encodeURIComponent(recordingId)}`
    });
  } catch (error) {
    console.error('Recording upload error:', error);
    await safeUnlink(req.file?.path);
    res.status(500).json({ error: 'The recording could not be prepared for Canvas.' });
  }
});

app.get('/recordings/:recordingId', async function (req, res) {
  const recording = recordings.get(req.params.recordingId);
  if (!recording || Date.now() > recording.expiresAt) {
    return res.status(404).send('Recording not found or expired.');
  }

  try {
    await stat(recording.path);
    res.setHeader('Content-Type', recording.mediaType);
    res.setHeader('Content-Disposition', `attachment; filename="${recording.filename}"`);
    res.setHeader('Cache-Control', 'private, no-store, max-age=0');
    res.sendFile(recording.path);
  } catch (error) {
    res.status(404).send('Recording not found.');
  }
});

app.get('/lti/deep-link-submit', async function (req, res) {
  try {
    const launchId = String(req.query.launch_id || '');
    const recordingId = String(req.query.recording_id || '');
    const launch = getLiveLaunch(launchId);
    const recording = recordings.get(recordingId);

    if (!launch || !recording || recording.launchId !== launchId || Date.now() > recording.expiresAt) {
      return res.status(400).send('The Canvas submission session or recording has expired.');
    }

    const now = Math.floor(Date.now() / 1000);
    const deploymentId = launch.claims['https://purl.imsglobal.org/spec/lti/claim/deployment_id'];
    const contentItem = {
      type: 'file',
      title: recording.filename,
      text: recording.filename,
      url: `${BASE_URL}/recordings/${encodeURIComponent(recordingId)}`,
      mediaType: recording.mediaType,
      expiresAt: new Date(recording.expiresAt).toISOString()
    };

    const responseClaims = {
      iss: CANVAS_CLIENT_ID,
      aud: launch.claims.iss,
      nonce: randomToken(24),
      'https://purl.imsglobal.org/spec/lti/claim/deployment_id': deploymentId,
      'https://purl.imsglobal.org/spec/lti/claim/message_type': 'LtiDeepLinkingResponse',
      'https://purl.imsglobal.org/spec/lti/claim/version': '1.3.0',
      'https://purl.imsglobal.org/spec/lti-dl/claim/content_items': [contentItem],
      'https://purl.imsglobal.org/spec/lti-dl/claim/msg': 'The SML3004 video recording has been returned to Canvas.'
    };

    if (Object.prototype.hasOwnProperty.call(launch.deepLinkSettings, 'data')) {
      responseClaims['https://purl.imsglobal.org/spec/lti-dl/claim/data'] = launch.deepLinkSettings.data;
    }

    const jwt = await new SignJWT(responseClaims)
      .setProtectedHeader({ alg: 'RS256', kid: LTI_KEY_ID, typ: 'JWT' })
      .setIssuedAt(now)
      .setExpirationTime(now + 300)
      .sign(privateKey);

    const returnUrl = launch.deepLinkSettings.deep_link_return_url;
    launches.delete(launchId);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.send(autoPostHtml(returnUrl, jwt));
  } catch (error) {
    console.error('Deep linking response error:', error);
    res.status(500).send('The recording could not be returned to Canvas.');
  }
});

app.use(function (error, req, res, next) {
  if (error instanceof multer.MulterError && error.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({ error: `The recording exceeds the ${MAX_RECORDING_MB} MB prototype upload limit.` });
  }
  console.error('Unhandled server error:', error);
  res.status(500).send('Unexpected server error.');
});

setInterval(cleanupExpiredData, 60 * 1000).unref();

app.listen(PORT, function () {
  console.log(`SML3004 Canvas LTI prototype listening on port ${PORT}`);
  console.log(`Canvas config: ${BASE_URL}/canvas-config.json`);
});

function stripTrailingSlash(value) {
  return value.replace(/\/+$/, '');
}

function randomToken(bytes) {
  return crypto.randomBytes(bytes).toString('base64url');
}

function getLiveLaunch(launchId) {
  const launch = launches.get(launchId);
  if (!launch) return null;
  if (Date.now() - launch.createdAt > LAUNCH_TTL_MS) {
    launches.delete(launchId);
    return null;
  }
  return launch;
}

async function loadPrivateKeyPem() {
  if (process.env.LTI_PRIVATE_KEY) {
    return process.env.LTI_PRIVATE_KEY.replace(/\\n/g, '\n');
  }
  const keyPath = process.env.LTI_PRIVATE_KEY_PATH || path.join(__dirname, 'keys', 'private.pem');
  return readFile(keyPath, 'utf8');
}

function safeJsonForHtml(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function autoPostHtml(returnUrl, jwt) {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Returning to Canvas</title></head>
<body>
  <p>Returning the SML3004 recording to Canvas…</p>
  <form id="deepLinkReturn" method="post" action="${escapeHtml(returnUrl)}">
    <input type="hidden" name="JWT" value="${escapeHtml(jwt)}">
  </form>
  <script>document.getElementById('deepLinkReturn').submit();</script>
</body>
</html>`;
}

async function safeUnlink(filePath) {
  if (!filePath) return;
  try { await unlink(filePath); } catch { /* ignore */ }
}

async function cleanupExpiredData() {
  const now = Date.now();
  for (const [state, record] of states.entries()) {
    if (now - record.createdAt > STATE_TTL_MS) states.delete(state);
  }
  for (const [launchId, record] of launches.entries()) {
    if (now - record.createdAt > LAUNCH_TTL_MS) launches.delete(launchId);
  }
  for (const [recordingId, record] of recordings.entries()) {
    if (now > record.expiresAt) {
      recordings.delete(recordingId);
      await safeUnlink(record.path);
    }
  }
}

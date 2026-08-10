# SML3004 Canvas LTI 1.3 prototype

This folder now contains a Canvas LTI 1.3 prototype around the existing SML3004 video dialogue. The original `index.html` remains the recorder UI. When the page is launched through Canvas, `server.mjs` injects `lti-client.js`, which replaces the local-download step with a Canvas return workflow.

## What this prototype does

1. Canvas launches the tool using LTI 1.3 OpenID Connect.
2. The server validates Canvas's signed `id_token` against the Canvas production JWKS endpoint.
3. The student uses the existing SML3004 camera, microphone, spoken prompts and recording interface.
4. After recording, the student selects **Send recording to Canvas**.
5. The browser sends the completed WebM recording to the LTI service. It is held temporarily, with an expiring random download URL.
6. The tool signs an `LtiDeepLinkingResponse` containing a Deep Linking `file` item.
7. Canvas downloads its own copy of the file and returns the student to the Canvas submission workflow.
8. The temporary tool-side recording expires automatically.

This uses Canvas's `homework_submission` placement. The Canvas assignment must accept **Online > File Uploads** for the tool tab to appear in the submission UI.

## Important architectural change

GitHub Pages cannot run an LTI 1.3 tool because LTI requires server-side signing keys, OIDC launch validation and secure temporary file delivery. The GitHub repository remains the source code, but this `duplicate` folder must be deployed as an HTTPS Node service approved by Newcastle University. The static GitHub Pages version can remain available as a preview, but it is not the Canvas LTI endpoint.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Generate an RSA signing key

```bash
npm run generate-keys
```

This creates `keys/private.pem`, `keys/public.pem` and `keys/public-jwk.json`. The `keys/` directory is ignored by Git. Never commit the private key.

### 3. Configure environment variables

Copy `.env.example` into the host's secret/environment configuration. At minimum provide:

```text
BASE_URL=https://your-approved-host.example
CANVAS_CLIENT_ID=<Canvas Developer Key client ID>
LTI_PRIVATE_KEY_PATH=./keys/private.pem
LTI_KEY_ID=sml3004-2026
```

Production Canvas defaults are already supplied for:

```text
CANVAS_ISSUER=https://canvas.instructure.com
CANVAS_AUTH_URL=https://sso.canvaslms.com/api/lti/authorize_redirect
CANVAS_JWKS_URL=https://sso.canvaslms.com/api/lti/security/jwks
```

### 4. Start the service

```bash
npm start
```

Health check:

```text
https://your-approved-host.example/health
```

Canvas LTI configuration JSON:

```text
https://your-approved-host.example/canvas-config.json
```

Tool public JWKS:

```text
https://your-approved-host.example/.well-known/jwks.json
```

### 5. Newcastle Canvas administrator setup

An account administrator must create and enable an **LTI 1.3 Developer Key** using the JSON from `/canvas-config.json` or its HTTPS configuration URL. The key is configured with the `homework_submission` placement and `LtiDeepLinkingRequest` message type.

After the Developer Key is created, copy its Canvas **client ID** into the host's `CANVAS_CLIENT_ID` environment variable and restart the service. The administrator can then install the tool at the relevant Canvas account, sub-account or course using that client ID.

Optionally, after installation, set `CANVAS_DEPLOYMENT_ID` to the deployment ID shown by Canvas. This restricts the prototype to that specific installation.

### 6. Assignment setup

Create or edit the SML3004 Canvas assignment so that the submission type is **Online** and **File Uploads** is enabled. When students open the file-submission interface, Canvas can expose **SML3004 Video Dialogue** as an external-tool tab.

## Prototype limitations that must be addressed before institutional production

- Launch state, launch records and recording metadata are currently held in server memory. A production deployment should use an approved shared data store so multiple server instances and restarts are safe.
- Video files are temporarily stored on the server filesystem. Institutional deployment should use storage and retention controls approved by Newcastle University, with encryption and explicit retention/deletion policy.
- The prototype has a default upload limit of 500 MB and a 20-minute temporary-file lifetime. These values should be reviewed against expected SML3004 recording length and University policy.
- The code minimises Canvas profile disclosure by configuring `privacy_level` as `anonymous`; Canvas still sends the LTI subject identifier required by the protocol.
- Browser camera/microphone behaviour inside an LMS iframe varies. The prototype includes an **Open recorder in a new window** control for cases where iframe permission policy blocks capture.
- The data-protection wording shown in LTI mode is technical prototype wording, not an institutional privacy notice. Newcastle University's data-protection and information-security teams should approve the final wording and hosting design.

## Files added

- `server.mjs`: Canvas LTI/OIDC launch validation, JWKS, temporary recording endpoint and Deep Linking response.
- `lti-client.js`: adds the Canvas submission action to the existing recorder only when launched via LTI.
- `package.json`: Node dependencies and scripts.
- `.env.example`: deployment settings.
- `.gitignore`: prevents keys, secrets and recordings from being committed.
- `scripts/generate-keys.mjs`: local RSA signing-key generator.

The existing `index.html` is deliberately unchanged so the current duplicate GitHub Pages page remains available as a standalone preview.

import { generateKeyPairSync } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { exportJWK, importSPKI } from 'jose';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

await mkdir(new URL('../keys/', import.meta.url), { recursive: true });
await writeFile(new URL('../keys/private.pem', import.meta.url), privateKey, { mode: 0o600 });
await writeFile(new URL('../keys/public.pem', import.meta.url), publicKey);

const publicKeyObject = await importSPKI(publicKey, 'RS256');
const jwk = await exportJWK(publicKeyObject);
jwk.use = 'sig';
jwk.alg = 'RS256';
jwk.kid = process.env.LTI_KEY_ID || 'sml3004-2026';
await writeFile(new URL('../keys/public-jwk.json', import.meta.url), JSON.stringify(jwk, null, 2));

console.log('Generated keys/private.pem, keys/public.pem and keys/public-jwk.json.');
console.log('Do not commit keys/private.pem.');

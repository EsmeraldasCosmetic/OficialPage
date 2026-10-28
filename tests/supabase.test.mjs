import test from "node:test";
import assert from "node:assert/strict";
import { PROJECT_URL, PROJECT_REF, restHeaders, createCatalogClient } from "../assets/js/productos/supabase-client.js";
const config = { url: PROJECT_URL, publishableKey: "sb_publishable_TEST_ONLY" };
const jwt = (claims) => [Buffer.from('{"alg":"HS256"}').toString('base64url'), Buffer.from(JSON.stringify({ role: 'anon', ref: PROJECT_REF, exp: 4102444800, ...claims })).toString('base64url'), 'test-signature'].join('.');
// El encabezado JWT debe comenzar eyJ como las claves legacy reales.
test('publishable: solo apikey; legacy anon: apikey y Bearer', () => {
  assert.equal(restHeaders(config).Authorization, undefined);
  const key = jwt({});
  assert.equal(restHeaders({ ...config, publishableKey: key }).Authorization, `Bearer ${key}`);
});
test('rechaza secretos, configuración pendiente, otro proyecto y claves expiradas', () => {
  for (const key of ['sb_secret_TEST', 'PEGAR_AQUI_LA_PUBLISHABLE_KEY', jwt({ role: 'service_role' }), jwt({ ref: 'otro' }), jwt({ exp: 1 })]) {
    assert.throws(() => restHeaders({ ...config, publishableKey: key }));
  }
  assert.throws(() => restHeaders({ ...config, url: 'https://example.com' }));
});
test('REST limita tablas y usa GET sin cookies ni redirecciones', async () => {
  const client = createCatalogClient(config, async (url, options) => {
    assert.equal(url.origin, PROJECT_URL);
    assert.equal(url.searchParams.get('select'), 'nombre');
    assert.equal(options.method, 'GET');
    assert.equal(options.credentials, 'omit');
    assert.equal(options.redirect, 'error');
    return { ok: true, json: async () => [{ nombre: 'Ejemplo' }] };
  });
  assert.deepEqual(await client.read('productos', { select: 'nombre' }), [{ nombre: 'Ejemplo' }]);
  await assert.rejects(client.read('../rpc/admin', { select: '*' }));
  await assert.rejects(client.read('productos'));
});
test('propaga errores HTTP y no confunde respuesta inválida con catálogo vacío', async () => {
  const client = createCatalogClient(config, async () => ({ ok: false, status: 401 }));
  await assert.rejects(client.read('productos', { select: '*' }), /401/);
  const invalid = createCatalogClient(config, async () => ({ ok: true, json: async () => ({}) }));
  await assert.rejects(invalid.read('productos', { select: '*' }), /inesperada/);
});

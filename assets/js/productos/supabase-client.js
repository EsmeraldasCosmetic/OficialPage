export const PROJECT_REF = "nekbrpqthteyeymjnxwk";
export const PROJECT_URL = `https://${PROJECT_REF}.supabase.co`;
const TABLES = new Set(["productos", "producto_imagenes", "producto_tonos"]);

function claimsOf(jwt) {
  try {
    const parts = jwt.split(".");
    if (parts.length !== 3 || !parts.every(Boolean)) throw Error();
    return JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    throw Error("La clave legacy no es un JWT válido.");
  }
}

// Solo diagnóstico de formato: la firma y la vigencia se verifican en Supabase.
export function validatePublicConfig(config) {
  if (config?.url !== PROJECT_URL) throw Error("La URL no corresponde al proyecto esperado.");
  const key = config.publishableKey;
  if (typeof key !== "string" || key !== key.trim()) throw Error("Falta la clave pública o contiene espacios.");
  if (/^sb_publishable_[A-Za-z0-9_-]+$/.test(key)) return { ...config, keyType: "publishable" };
  if (key.startsWith("eyJ")) {
    const claims = claimsOf(key);
    if (claims.role !== "anon") throw Error("Solo se admite una clave pública anon; nunca service_role ni tokens de usuario como API key.");
    if (claims.ref !== PROJECT_REF) throw Error("La clave legacy indica otro project ref.");
    if (typeof claims.exp !== "number" || claims.exp <= Date.now() / 1000) throw Error("La clave legacy ha expirado o no declara expiración.");
    return { ...config, keyType: "anon" };
  }
  throw Error("Configura una clave pública sb_publishable_ o legacy anon. No se admiten secretos.");
}

export function restHeaders(config) {
  const validated = validatePublicConfig(config);
  const headers = { apikey: validated.publishableKey, Accept: "application/json", "Accept-Profile": "public" };
  // Una publishable moderna NO es un JWT. El catálogo no necesita iniciar sesión.
  if (validated.keyType === "anon") headers.Authorization = `Bearer ${validated.publishableKey}`;
  return headers;
}

export function createCatalogClient(config, fetchImpl = globalThis.fetch) {
  const headers = restHeaders(config);
  return Object.freeze({
    async read(table, { select, limit = 24, offset = 0, order } = {}) {
      if (!TABLES.has(table)) throw Error("Tabla no permitida.");
      if (typeof select !== "string" || !select.trim()) throw Error("Indica explícitamente las columnas públicas de select.");
      if (!Number.isInteger(limit) || limit < 1 || limit > 1000 || !Number.isInteger(offset) || offset < 0) throw Error("Paginación inválida.");
      const url = new URL(`/rest/v1/${table}`, PROJECT_URL);
      url.search = new URLSearchParams({ select, limit: String(limit), offset: String(offset), ...(order ? { order } : {}) });
      const response = await fetchImpl(url, { method: "GET", headers: { ...headers }, credentials: "omit", redirect: "error", cache: "no-store", signal: AbortSignal.timeout(15000) });
      // No registrar claves, cabeceras ni cuerpos de errores potencialmente sensibles.
      if (!response.ok) throw Error(`Supabase: HTTP ${response.status} en ${table}. Revisa clave, permisos y RLS.`);
      const rows = await response.json();
      if (!Array.isArray(rows)) throw Error("Supabase devolvió una respuesta inesperada.");
      return rows;
    },
    async verify() {
      const results = [];
      for (const table of TABLES) {
        // No devuelve filas ni imprime información del catálogo.
        await this.read(table, { select: "*", limit: 1, offset: 0 }).then(() => results.push({ table, readable: true }));
      }
      return results;
    },
  });
}

import { readFile, realpath } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
export const CSP =
  "default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https:; font-src 'self'; connect-src 'self' https://nekbrpqthteyeymjnxwk.supabase.co; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; form-action 'self' https://wa.me";
export const headers = {
  "Content-Security-Policy": CSP,
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "DENY",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};
export async function staticFile(req, res, root, pathname) {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, headers).end();
    return;
  }
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    res.writeHead(400, headers).end();
    return;
  }
  const relative = decoded.replace(/^\//, "") || "index.html";
  if (
    relative.split(/[\\/]/).some((p) => p.startsWith(".") || p === "") ||
    !(
      relative.startsWith("assets/") ||
      relative === "data/products.json" ||
      /^(index|404|rostro|ojos|labios|skincare|cuerpo|accesorios|collabs|contacto|preguntas|nuestrahistoria|producto)\.html$/.test(
        relative,
      ) ||
      relative === "robots.txt"
    )
  ) {
    res.writeHead(404, headers).end("No encontrado");
    return;
  }
  try {
    const base = await realpath(root),
      file = await realpath(resolve(base, relative));
    if (!file.startsWith(base + sep)) throw Error("fuera");
    const bytes = await readFile(file);
    res.writeHead(200, {
      ...headers,
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(req.method === "HEAD" ? undefined : bytes);
  } catch {
    res.writeHead(404, headers).end("No encontrado");
  }
}
export async function jsonBody(req, limit = 6 * 1024 * 1024) {
  if (!req.headers["content-type"]?.startsWith("application/json")) {
    const e = Error("Se requiere application/json");
    e.status = 415;
    throw e;
  }
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limit) {
      const e = Error("Archivo demasiado grande");
      e.status = 413;
      throw e;
    }
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

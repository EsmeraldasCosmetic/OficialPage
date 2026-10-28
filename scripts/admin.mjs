import http from "node:http";
import { randomBytes, timingSafeEqual, randomUUID } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { openDatabase } from "./gemas/esmeralda.mjs";
import { headers, jsonBody, staticFile } from "./gemas/onix-http.mjs";
const root = resolve("."),
  port = Number(process.env.ADMIN_PORT || 4174),
  origin = `http://127.0.0.1:${port}`;
const db = openDatabase(
  process.env.RUBI_DATABASE || resolve(".private/esmeralda.sqlite"),
);
let loginToken = randomBytes(32).toString("hex"),
  attempts = [];
const sessions = new Map();
const equal = (a, b) =>
  typeof a === "string" &&
  typeof b === "string" &&
  Buffer.byteLength(a) === Buffer.byteLength(b) &&
  timingSafeEqual(Buffer.from(a), Buffer.from(b));
const send = (res, status, data, extra = {}) =>
  res
    .writeHead(status, {
      ...headers,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extra,
    })
    .end(JSON.stringify(data));
const server = http.createServer(async (req, res) => {
  try {
    if (req.headers.host !== `127.0.0.1:${port}`)
      return send(res, 403, { error: "Host no permitido" });
    const url = new URL(req.url, origin),
      route = url.pathname;
    if (req.headers.origin && req.headers.origin !== origin)
      return send(res, 403, { error: "Origen no permitido" });
    if (req.method !== "GET" && req.headers.origin !== origin)
      return send(res, 403, {
        error: "Esta acción solo está disponible desde el panel local",
      });
    if (route === "/api/login" && req.method === "POST") {
      attempts = attempts.filter((t) => Date.now() - t < 60000);
      if (attempts.length >= 8)
        return send(res, 429, {
          error: "Demasiados intentos. Espera un minuto.",
        });
      attempts.push(Date.now());
      const body = await jsonBody(req, 4096);
      if (!loginToken || !equal(body.token, loginToken))
        return send(res, 401, {
          error:
            "Acceso inválido o utilizado. Reinicia el administrador para obtener otro enlace.",
        });
      loginToken = null;
      attempts = [];
      const id = randomBytes(32).toString("hex"),
        csrf = randomBytes(32).toString("hex");
      sessions.set(id, { csrf, expires: Date.now() + 4 * 60 * 60 * 1000 });
      return send(
        res,
        200,
        { csrf },
        {
          "Set-Cookie": `rubi=${id}; HttpOnly; SameSite=Strict; Path=/; Max-Age=14400`,
        },
      );
    }
    if (route.startsWith("/api/")) {
      const cookie = req.headers.cookie
          ?.split(";")
          .map((v) => v.trim())
          .find((v) => v.startsWith("rubi="))
          ?.slice(5),
        session = sessions.get(cookie);
      if (!session || session.expires < Date.now())
        return send(res, 401, {
          error: "Abre el enlace de acceso generado al iniciar Rubí.",
        });
      if (
        req.method !== "GET" &&
        !equal(req.headers["x-csrf-token"], session.csrf)
      )
        return send(res, 403, { error: "Sesión de edición no válida" });
      if (route === "/api/session" && req.method === "GET")
        return send(res, 200, { csrf: session.csrf });
      if (route === "/api/products" && req.method === "GET")
        return send(res, 200, { products: db.list() });
      if (route === "/api/products" && req.method === "POST") {
        const body = await jsonBody(req, 512 * 1024);
        return send(res, 200, { product: db.save(body) });
      }
      if (route === "/api/export" && req.method === "POST") {
        db.backup();
        const count = db.export(
          process.env.RUBI_EXPORT_PATH || resolve("data/products.json"),
        );
        return send(res, 200, {
          count,
          message:
            "Catálogo actualizado en data/products.json. Sube los cambios a GitHub para publicar.",
        });
      }
      if (route === "/api/backup" && req.method === "POST") {
        db.backup();
        return send(res, 200, { products: db.list() });
      }
      if (route === "/api/import" && req.method === "POST") {
        const body = await jsonBody(req);
        db.backup();
        return send(res, 200, { count: db.import(body) });
      }
      if (route === "/api/history" && req.method === "GET")
        return send(res, 200, {
          revisions: db.revisions(url.searchParams.get("key")),
        });
      if (route === "/api/restore" && req.method === "POST") {
        const body = await jsonBody(req, 4096);
        return send(res, 200, {
          product: db.restore(body.key, body.id, body.version),
        });
      }
      if (route === "/api/logout" && req.method === "POST") {
        sessions.delete(cookie);
        return send(
          res,
          200,
          { ok: true },
          {
            "Set-Cookie": "rubi=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0",
          },
        );
      }
      if (route === "/api/image" && req.method === "POST") {
        const body = await jsonBody(req),
          buffer = Buffer.from(String(body.data || ""), "base64");
        if (buffer.length > 4 * 1024 * 1024 || buffer.length < 16)
          throw Error("Imagen inválida o mayor a 4 MB");
        const ext = buffer
          .subarray(0, 8)
          .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
          ? "png"
          : buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255
            ? "jpg"
            : buffer.toString("ascii", 0, 4) === "RIFF" &&
                buffer.toString("ascii", 8, 12) === "WEBP"
              ? "webp"
              : null;
        if (!ext) throw Error("Solo se aceptan PNG, JPEG o WebP reales");
        const directory = "assets/images/uploads";
        mkdirSync(directory, { recursive: true });
        const file = `${directory}/${randomUUID()}.${ext}`;
        writeFileSync(file, buffer);
        return send(res, 200, { path: file });
      }
      return send(res, 404, { error: "Operación no encontrada" });
    }
    const routes = {
      "/": "rubi/index.html",
      "/rubi/app.js": "rubi/app.js",
      "/rubi/styles.css": "rubi/styles.css",
    };
    if (routes[route] && req.method === "GET") {
      const file = routes[route];
      res
        .writeHead(200, {
          ...headers,
          "Content-Type": file.endsWith(".js")
            ? "text/javascript"
            : file.endsWith(".css")
              ? "text/css"
              : "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        })
        .end(await readFile(file));
      return;
    }
    if (route.startsWith("/assets/"))
      return await staticFile(req, res, root, route);
    return send(res, 404, { error: "No encontrado" });
  } catch (e) {
    send(res, e.status || 400, {
      error: e.message.includes("UNIQUE")
        ? "Identificador repetido en la base de datos"
        : e.message,
    });
  }
});
server.requestTimeout = 30000;
server.headersTimeout = 15000;
server.listen(port, "127.0.0.1", () => {
  mkdirSync(".private", { recursive: true });
  const url = `${origin}/#acceso=${loginToken}`;
  writeFileSync(
    process.env.RUBI_ACCESS_FILE || ".private/rubi-access.txt",
    url,
    { mode: 0o600 },
  );
  console.log(
    `Rubí · administración local\n${url}\nAcceso de un solo uso. La base no se publica en GitHub.`,
  );
});
process.on("SIGINT", () =>
  server.close(() => {
    db.close();
    process.exit(0);
  }),
);

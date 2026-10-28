import http from "node:http";
import { resolve } from "node:path";
import { staticFile, headers } from "./gemas/onix-http.mjs";
const root = resolve(process.argv[2] || "."),
  port = Number(process.env.PORT || 4173);
http
  .createServer(async (req, res) => {
    if (
      ![`127.0.0.1:${port}`, `localhost:${port}`].includes(req.headers.host)
    ) {
      res.writeHead(403, headers).end();
      return;
    }
    await staticFile(
      req,
      res,
      root,
      new URL(req.url, "http://localhost").pathname,
    );
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Esmeralda’s Cosmetic: http://127.0.0.1:${port}`),
  );

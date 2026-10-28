import test from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import net from "node:net";
test("Rubí: autenticación, CSRF, guardado, conflicto, importación y exportación", async () => {
  const folder = mkdtempSync(join(tmpdir(), "rubi-http-"));
  const port = await new Promise((resolve) => {
    const s = net.createServer();
    s.listen(0, "127.0.0.1", () => {
      const p = s.address().port;
      s.close(() => resolve(p));
    });
  });
  const origin = `http://127.0.0.1:${port}`,
    exportPath = join(folder, "public.json");
  const child = spawn(process.execPath, ["scripts/admin.mjs"], {
    env: {
      ...process.env,
      ADMIN_PORT: String(port),
      RUBI_DATABASE: join(folder, "test.sqlite"),
      RUBI_EXPORT_PATH: exportPath,
      RUBI_ACCESS_FILE: join(folder, "access.txt"),
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let stderr = "";
  child.stderr.on("data", (d) => (stderr += d));
  try {
    const token = await new Promise((resolve, reject) => {
      let output = "";
      const timeout = setTimeout(
        () => reject(Error("Servidor Rubí no inició: " + stderr)),
        15000,
      );
      child.stdout.on("data", (d) => {
        output += d;
        const match = output.match(/#acceso=([a-f0-9]+)/);
        if (match) {
          clearTimeout(timeout);
          resolve(match[1]);
        }
      });
      child.on("exit", () => {
        clearTimeout(timeout);
        reject(Error("Servidor cerró: " + stderr));
      });
    });
    assert.equal((await fetch(origin + "/api/products")).status, 401);
    const login = await fetch(origin + "/api/login", {
      method: "POST",
      headers: { Origin: origin, "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    assert.equal(login.status, 200);
    const cookie = login.headers.get("set-cookie").split(";")[0],
      { csrf } = await login.json();
    assert.match(login.headers.get("set-cookie"), /HttpOnly/);
    assert.match(login.headers.get("set-cookie"), /SameSite=Strict/);
    const request = (path, body, extra = {}) =>
      fetch(origin + "/api/" + path, {
        method: body === undefined ? "GET" : "POST",
        headers: {
          Cookie: cookie,
          Origin: origin,
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
          ...extra,
        },
        ...(body === undefined ? {} : { body: JSON.stringify(body) }),
      });
    assert.equal(
      (await request("export", {}, { "X-CSRF-Token": "" })).status,
      403,
    );
    assert.equal(
      (await request("export", {}, { Origin: "https://evil.example" })).status,
      403,
    );
    assert.equal(
      (
        await request("image", {
          data: Buffer.from('<svg onload="alert(1)"></svg>').toString("base64"),
        })
      ).status,
      400,
    );
    const products = (await (await request("products")).json()).products,
      p = products[0];
    const update = await request("products", {
      ...p,
      nombre: "Probado en Rubí",
      precio: 123.45,
    });
    assert.equal(update.status, 200);
    const updated = (await update.json()).product;
    assert.equal(updated.precio, 123.45);
    assert.equal(
      (await request("products", { ...p, nombre: "Versión atrasada" })).status,
      409,
    );
    const bad = await request("import", [{ ...updated, precio: -100 }]);
    assert.equal(bad.status, 400);
    const records = (await (await request("history?key=" + p.key)).json())
      .revisions;
    assert.equal(records.length, 1);
    assert.equal(
      (
        await request("restore", {
          key: p.key,
          id: records[0].id,
          version: updated.version,
        })
      ).status,
      200,
    );
    assert.equal((await request("export", {})).status, 200);
    assert.equal(JSON.parse(readFileSync(exportPath)).length, products.length);
    assert.equal((await request("logout", {})).status, 200);
    assert.equal((await request("products")).status, 401);
  } finally {
    child.kill();
    await new Promise((resolve) =>
      child.exitCode !== null ? resolve() : child.once("exit", resolve),
    );
    rmSync(folder, { recursive: true, force: true });
  }
});

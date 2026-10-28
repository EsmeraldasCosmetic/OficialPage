// Esmeralda: base local normalizada; jamás se incluye en dist/.
import { DatabaseSync } from "node:sqlite";
import { mkdirSync, readFileSync, writeFileSync, renameSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { randomUUID } from "node:crypto";
import { validateCatalog, sanitizeProduct } from "../../assets/gemas/onix.js";
export function openDatabase(
  file = resolve(".private/esmeralda.sqlite"),
  seedFile = resolve("data/products.json"),
) {
  mkdirSync(dirname(file), { recursive: true });
  const db = new DatabaseSync(file);
  db.exec(`PRAGMA foreign_keys=ON; PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
  CREATE TABLE IF NOT EXISTS products(key TEXT PRIMARY KEY, legacy_id TEXT NOT NULL, section TEXT NOT NULL, name TEXT NOT NULL, brand TEXT NOT NULL, kind TEXT NOT NULL, description TEXT NOT NULL, price_minor INTEGER, thumbnail TEXT NOT NULL, tag TEXT NOT NULL, collaboration INTEGER NOT NULL, status TEXT NOT NULL CHECK(status IN ('active','draft','archived')), version INTEGER NOT NULL, updated_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS variants(id TEXT PRIMARY KEY, product_key TEXT NOT NULL REFERENCES products(key) ON DELETE CASCADE, position INTEGER NOT NULL, name TEXT NOT NULL, hex TEXT NOT NULL, image TEXT NOT NULL, description TEXT NOT NULL, aliases TEXT NOT NULL, sku TEXT NOT NULL, availability TEXT NOT NULL, review TEXT NOT NULL, price_minor INTEGER, UNIQUE(product_key,name));
  CREATE TABLE IF NOT EXISTS media(product_key TEXT NOT NULL REFERENCES products(key) ON DELETE CASCADE,position INTEGER NOT NULL,url TEXT NOT NULL,PRIMARY KEY(product_key,position));
  CREATE TABLE IF NOT EXISTS revisions(id INTEGER PRIMARY KEY, product_key TEXT NOT NULL, saved_at TEXT NOT NULL, snapshot TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS metadata(key TEXT PRIMARY KEY,value TEXT NOT NULL);`);
  for (const table of ["products", "variants"]) {
    if (!db.prepare(`PRAGMA table_info(${table})`).all().some((c) => c.name === "stock"))
      db.exec(`ALTER TABLE ${table} ADD COLUMN stock INTEGER CHECK(stock IS NULL OR (stock >= 0 AND stock <= 1000000))`);
  }
  const put = (p) => {
    const now = new Date().toISOString();
    db.prepare(
      `INSERT INTO products VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(key) DO UPDATE SET legacy_id=excluded.legacy_id,section=excluded.section,name=excluded.name,brand=excluded.brand,kind=excluded.kind,description=excluded.description,price_minor=excluded.price_minor,thumbnail=excluded.thumbnail,tag=excluded.tag,collaboration=excluded.collaboration,status=excluded.status,version=excluded.version,updated_at=excluded.updated_at,stock=excluded.stock`,
    ).run(
      p.key,
      JSON.stringify(p.id),
      p._ecSection,
      p.nombre,
      p.marca,
      p.categoria,
      p.descripcion,
      p.precio === null ? null : Math.round(p.precio * 100),
      p.thumbnail,
      p.tag,
      Number(p.colaboracion),
      p.status,
      p.version,
      now,
      p.stock,
    );
    db.prepare("DELETE FROM variants WHERE product_key=?").run(p.key);
    db.prepare("DELETE FROM media WHERE product_key=?").run(p.key);
    const v = db.prepare(
      "INSERT INTO variants VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
    );
    (p.tonos || []).forEach((t, i) =>
      v.run(
        t.id,
        p.key,
        i,
        t.nombre,
        t.hex,
        t.imagen,
        t.descripcion,
        JSON.stringify(t.aliases),
        t.sku,
        t.availability,
        t.review,
        t.price === null ? null : Math.round(t.price * 100),
        t.stock,
      ),
    );
    const m = db.prepare("INSERT INTO media VALUES(?,?,?)");
    p.imagenes.forEach((url, i) => m.run(p.key, i, url));
  };
  const list = () =>
    db
      .prepare("SELECT * FROM products ORDER BY rowid")
      .all()
      .map((p) => ({
        key: p.key,
        id: JSON.parse(p.legacy_id),
        _ecSection: p.section,
        nombre: p.name,
        marca: p.brand,
        categoria: p.kind,
        descripcion: p.description,
        precio: p.price_minor === null ? null : p.price_minor / 100,
        stock: p.stock,
        thumbnail: p.thumbnail,
        tag: p.tag,
        colaboracion: !!p.collaboration,
        status: p.status,
        version: p.version,
        updatedAt: p.updated_at,
        imagenes: db
          .prepare(
            "SELECT url FROM media WHERE product_key=? ORDER BY position",
          )
          .all(p.key)
          .map((m) => m.url),
        tonos: (() => {
          const v = db
            .prepare(
              "SELECT * FROM variants WHERE product_key=? ORDER BY position",
            )
            .all(p.key)
            .map((t) => ({
              id: t.id,
              nombre: t.name,
              hex: t.hex,
              imagen: t.image,
              descripcion: t.description,
              aliases: JSON.parse(t.aliases),
              sku: t.sku,
              availability: t.availability,
              stock: t.stock,
              review: t.review,
              price: t.price_minor === null ? null : t.price_minor / 100,
            }));
          return v.length ? v : null;
        })(),
      }));
  const transaction = (fn) => {
    db.exec("BEGIN IMMEDIATE");
    try {
      const value = fn();
      db.exec("COMMIT");
      return value;
    } catch (e) {
      db.exec("ROLLBACK");
      throw e;
    }
  };
  if (!db.prepare("SELECT 1 FROM metadata WHERE key=?").get("initialized")) {
    const seed = validateCatalog(JSON.parse(readFileSync(seedFile, "utf8")));
    transaction(() => {
      seed.forEach((p) => put({ ...p, version: 1 }));
      db.prepare("INSERT INTO metadata VALUES(?,?)").run(
        "initialized",
        new Date().toISOString(),
      );
    });
  }
  return {
    db,
    list,
    save(input) {
      const p = sanitizeProduct(input);
      return transaction(() => {
        const old = list().find((x) => x.key === p.key);
        if (old && old.version !== p.version) {
          const e = Error(
            "Este producto cambió en otra pestaña. Recarga antes de guardar.",
          );
          e.status = 409;
          throw e;
        }
        if (!old && p.version !== 0)
          throw Error("La clave de un producto existente no se puede cambiar");
        if (old)
          db.prepare(
            "INSERT INTO revisions(product_key,saved_at,snapshot) VALUES(?,?,?)",
          ).run(old.key, new Date().toISOString(), JSON.stringify(old));
        put({ ...p, version: (old?.version || 0) + 1 });
        return list().find((x) => x.key === p.key);
      });
    },
    import(input) {
      const all = validateCatalog(input);
      return transaction(() => {
        const current = list();
        for (const p of all) {
          const old = current.find((x) => x.key === p.key);
          if (old)
            db.prepare(
              "INSERT INTO revisions(product_key,saved_at,snapshot) VALUES(?,?,?)",
            ).run(old.key, new Date().toISOString(), JSON.stringify(old));
          put({ ...p, version: (old?.version || 0) + 1 });
        }
        return all.length;
      });
    },
    revisions(key) {
      return db
        .prepare(
          "SELECT id,saved_at AS savedAt FROM revisions WHERE product_key=? ORDER BY id DESC LIMIT 20",
        )
        .all(key);
    },
    restore(key, id, version) {
      const old = db
        .prepare("SELECT snapshot FROM revisions WHERE id=? AND product_key=?")
        .get(id, key);
      if (!old) throw Error("Revisión no encontrada");
      return this.save({ ...JSON.parse(old.snapshot), version });
    },
    export(file = resolve("data/products.json")) {
      const all = validateCatalog(list()).filter((p) => p.status === "active");
      if (!all.length) throw Error("Publica al menos un producto activo");
      const tmp = file + "." + randomUUID() + ".tmp";
      writeFileSync(tmp, JSON.stringify(all, null, 2) + "\n");
      renameSync(tmp, file);
      return all.length;
    },
    backup() {
      const folder = resolve(dirname(file), "backups");
      mkdirSync(folder, { recursive: true });
      const dest = resolve(
        folder,
        `esmeralda-${Date.now()}-${randomUUID().slice(0, 8)}.sqlite`,
      );
      db.exec(`VACUUM INTO '${dest.replaceAll("'", "''")}'`);
      return dest;
    },
    close() {
      db.close();
    },
  };
}

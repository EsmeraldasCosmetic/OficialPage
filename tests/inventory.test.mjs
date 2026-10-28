import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { stockValue, stockLimit, stockLabel } from "../assets/gemas/inventario.js";
import { validCart } from "../assets/store.js";
import { openDatabase } from "../scripts/gemas/esmeralda.mjs";
import { applyRemoteStock } from "../assets/js/productos/supabase-stock.js";

test("existencias desconocidas, agotadas y cantidades inválidas", () => {
  assert.equal(stockValue(""), null);
  assert.equal(stockLimit({ stock: 0 }), 0);
  assert.equal(stockLabel({ stock: 2 }), "Disponible · 2 unidades");
  for (const n of [-1, 1.5, Infinity, true, 'abc', 1000001]) assert.throws(() => stockValue(n));
});
test("carrito limita duplicados al stock por tono y excluye agotados", () => {
  const p = {key:'test', stock:100, tonos:[{id:'test-v1',nombre:'Rosa',stock:3},{id:'test-v2',nombre:'Rojo',stock:0}]};
  const raw=[{key:'test',tone:'Rosa',quantity:2},{key:'test',tone:'Rosa',quantity:2},{key:'test',tone:'Rojo',quantity:1}];
  const cart=validCart(raw,[p]);
  assert.equal(cart.length,1);
  assert.equal(cart[0].quantity,3);
  assert.equal(validCart([{key:'plain',tone:'',quantity:1}],[{key:'plain',stock:0}]).length,0);
});
test("SQLite conserva existencias tras guardar, cerrar y reabrir", () => {
  const dir=mkdtempSync(join(tmpdir(),'ec-stock-'));
  let db;
  try {
    db=openDatabase(join(dir,'test.sqlite'));
    const p=db.list().find(p=>p.tonos?.length);
    p.stock=7; p.tonos[0].stock=3;
    db.save(p); db.close(); db=null;
    db=openDatabase(join(dir,'test.sqlite'));
    const saved=db.list().find(v=>v.key===p.key);
    assert.equal(saved.stock,7); assert.equal(saved.tonos[0].stock,3);
  } finally { db?.close(); rmSync(dir,{recursive:true,force:true}); }
});
test("stock remoto relaciona sección y producto; no mezcla tonos ni usa stock antiguo", () => {
  const products=[{_ecSection:'labios',id:1,stock:90,tonos:[{nombre:'Rosa',stock:90},{nombre:'Otro',stock:90}]}];
  const result=applyRemoteStock(products,[{seccion:'labios',id:1,activo:true,stock:5}], [{seccion:'labios',producto_id:1,nombre:'Rosa',stock:2}]);
  assert.equal(result[0].tonos[0].stock,2);
  assert.equal(result[0].tonos[1].stock,0);
  assert.equal(applyRemoteStock(products,[],[])[0].stock,0);
  assert.throws(()=>applyRemoteStock(products,[{seccion:'labios',id:1},{seccion:'labios',id:1}],[]),/duplicados/);
});

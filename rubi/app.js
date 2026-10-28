import {
  validateCatalog,
  normalizeText,
  publicImage,
  SECTIONS,
} from "/assets/gemas/onix.js";
import { productMatches } from "/assets/gemas/zafiro.js";
const $ = (s) => document.querySelector(s),
  esc = (v) =>
    String(v ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
let csrf = "",
  products = [],
  view = "all",
  page = 1,
  current = null,
  dirty = false,
  imported = null;
const labels = {
  rostro: "Rostro",
  ojos: "Ojos",
  labios: "Labios",
  skincare: "Skin care",
  cuerpo: "Cuerpo",
  accesorios: "Accesorios",
};
const price = (p) =>
  p === null
    ? "Por confirmar"
    : new Intl.NumberFormat("es-GT", {
        style: "currency",
        currency: "GTQ",
      }).format(p);
const pending = (p) =>
  (p.tonos || []).filter((t) => t.review !== "verified").length;
async function api(path, body) {
  const r = await fetch("/api/" + path, {
    method: body === undefined ? "GET" : "POST",
    headers: { "Content-Type": "application/json", "X-CSRF-Token": csrf },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  const result = await r.json();
  if (!r.ok) {
    if (r.status === 401 && !$("#login").open) $("#login").showModal();
    throw Error(result.error || "No se pudo completar la operación");
  }
  return result;
}
const status = (message) => {
  $("#status").textContent = message;
};
function render() {
  const variants = products.flatMap((p) => p.tonos || []);
  $("#nav-count").textContent = products.length;
  $("#review-count").textContent = products.filter(pending).length;
  $("#stats").innerHTML = [
    ["Productos", products.length, "Tu catálogo completo"],
    [
      "Activos",
      products.filter((p) => p.status === "active").length,
      "Visibles al actualizar la tienda",
    ],
    ["Variantes", variants.length, "Cada tono tiene su propio código"],
    [
      "Por revisar",
      variants.filter((t) => t.review !== "verified").length,
      "Fotos o nombres por confirmar",
    ],
  ]
    .map(
      ([label, n, hint]) =>
        `<div class="stat"><p>${label}</p><strong>${n}</strong><small>${hint}</small></div>`,
    )
    .join("");
  const query = $("#search").value,
    category = $("#category").value;
  const result = products.filter(
    (p) =>
      (view === "all" ||
        (view === "review" && pending(p) > 0) ||
        p.status === view) &&
      (!category || p._ecSection === category) &&
      productMatches(p, query),
  );
  const pages = Math.max(1, Math.ceil(result.length / 12));
  page = Math.min(page, pages);
  $("#rows").innerHTML =
    result
      .slice((page - 1) * 12, page * 12)
      .map(
        (p) =>
          `<tr><td><div class="product-cell"><img src="${esc(publicImage(p.thumbnail))}" alt="" loading="lazy"><div><strong>${esc(p.nombre)}</strong><small>${esc(labels[p._ecSection])} · ${esc(p.key)}</small></div></div></td><td><span class="pill ${p.status}">${{ active: "Activo", draft: "Borrador", archived: "Archivado" }[p.status]}</span></td><td>${price(p.precio)}</td><td>${p.tonos?.length || "—"}</td><td><span class="review-pill ${pending(p) ? "" : "done"}">${pending(p) ? `${pending(p)} por revisar` : p.tonos?.length ? "Verificados" : "Sin variantes"}</span></td><td><button data-edit="${esc(p.key)}" class="edit-button">Editar ↗</button></td></tr>`,
      )
      .join("") ||
    '<tr><td colspan="6" class="empty">No hay productos que coincidan con tu búsqueda.</td></tr>';
  $("#results").textContent = `${result.length} productos`;
  $("#page").textContent = `${page} / ${pages}`;
  $("#prev").disabled = page === 1;
  $("#next").disabled = page === pages;
  document
    .querySelectorAll("[data-view]")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === view));
}
const field = (label, name, value, extra = "") =>
  `<label class="field">${label}<input name="${name}" value="${esc(value)}" ${extra}></label>`;
function variantRow(t, index) {
  return `<article class="variant-row" data-variant="${index}"><img src="${esc(publicImage(t.imagen))}" alt="Foto de ${esc(t.nombre)}"><div>${field("Nombre del tono", `v${index}-name`, t.nombre, 'required maxlength="100"')}</div>${field("Código / SKU", `v${index}-sku`, t.sku, 'maxlength="100"')}${field("Color orientativo", `v${index}-hex`, t.hex, 'placeholder="#c58c85" pattern="#[0-9a-fA-F]{6}"')}<label class="field wide">Descripción del tono<input name="v${index}-description" value="${esc(t.descripcion)}" maxlength="500" placeholder="Ej. rosa cálido, acabado satinado"></label><label class="field wide">Fotografía de esta variante<input name="v${index}-image" value="${esc(t.imagen)}" placeholder="Ruta de imagen o enlace HTTPS permitido"></label>${field("Existencias de este tono", `v${index}-stock`, t.stock ?? "", 'type="number" min="0" max="1000000" step="1" placeholder="Sin confirmar"')}${field("Precio especial (Q)", `v${index}-price`, t.price ?? "", 'type="number" min="0" step="0.01" placeholder="Heredar precio"')}<label class="field">Disponibilidad<select name="v${index}-availability">${[
    ["consult", "Consultar"],
    ["available", "Disponible"],
    ["soldout", "Agotado"],
  ]
    .map(
      ([v, l]) =>
        `<option value="${v}" ${t.availability === v ? "selected" : ""}>${l}</option>`,
    )
    .join(
      "",
    )}</select></label><label class="field">Revisión<select name="v${index}-review">${[
    ["pending", "Pendiente"],
    ["inherited", "Heredada, por verificar"],
    ["verified", "Verificado"],
  ]
    .map(
      ([v, l]) =>
        `<option value="${v}" ${t.review === v ? "selected" : ""}>${l}</option>`,
    )
    .join(
      "",
    )}</select></label><label class="field wide">Otros nombres de búsqueda (separados por coma)<input name="v${index}-aliases" value="${esc((t.aliases || []).join(", "))}"></label><div class="variant-tools"><span>${esc(t.id)}</span><button type="button" data-upload="v${index}-image">Subir foto</button><button type="button" data-remove-variant="${index}">Eliminar tono</button></div></article>`;
}
function readForm() {
  const data = new FormData($("#product-form"));
  const text = (n) => String(data.get(n) || "").trim();
  return {
    ...current,
    key: text("key"),
    nombre: text("name"),
    _ecSection: text("category"),
    marca: text("brand"),
    categoria: text("kind"),
    precio: text("price") === "" ? null : Number(text("price")),
    stock: text("stock") === "" ? null : Number(text("stock")),
    descripcion: text("description"),
    thumbnail: text("thumbnail"),
    imagenes: text("images")
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean),
    status: text("status"),
    tag: text("tag"),
    colaboracion: data.get("collab") === "on",
    tonos: (current.tonos || []).map((t, i) => ({
      ...t,
      nombre: text(`v${i}-name`),
      sku: text(`v${i}-sku`),
      hex: text(`v${i}-hex`),
      descripcion: text(`v${i}-description`),
      imagen: text(`v${i}-image`),
      aliases: text(`v${i}-aliases`)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      price: text(`v${i}-price`) === "" ? null : Number(text(`v${i}-price`)),
      stock: text(`v${i}-stock`) === "" ? null : Number(text(`v${i}-stock`)),
      availability: text(`v${i}-availability`),
      review: text(`v${i}-review`),
    })),
  };
}
function editor(p) {
  current = structuredClone(p);
  dirty = false;
  $("#editor-title").textContent = p.version
    ? "Editar producto"
    : "Nuevo producto";
  $("#save-status").textContent = "";
  $("#editor-fields").innerHTML =
    `<div class="editor-layout"><div class="field-grid"><div class="field full">${field("Nombre del producto", "name", p.nombre, 'required maxlength="200"')}</div>${field("Clave permanente", "key", p.key, `required pattern="[a-z0-9]+(-[a-z0-9]+)*" ${p.version ? "readonly" : ""}`)}${field("Marca", "brand", p.marca, 'maxlength="120"')}<label class="field">Categoría<select name="category">${SECTIONS.map((s) => `<option value="${s}" ${p._ecSection === s ? "selected" : ""}>${labels[s]}</option>`).join("")}</select></label>${field("Tipo de producto", "kind", p.categoria, 'maxlength="120"')}${field("Precio base (Q)", "price", p.precio ?? "", 'type="number" min="0" max="100000" step="0.01" placeholder="Por confirmar"')}${field("Existencias (solo productos sin tonos)", "stock", p.stock ?? "", 'type="number" min="0" max="1000000" step="1" placeholder="Sin confirmar"')}${field("Etiqueta", "tag", p.tag, 'maxlength="50" placeholder="Ej. Nuevo"')}<label class="field full">Descripción<textarea name="description" rows="6" maxlength="20000">${esc(p.descripcion)}</textarea></label><label class="field full">Galería (una imagen por línea)<textarea name="images" rows="4">${esc(p.imagenes.join("\n"))}</textarea><small>Las imágenes de los tonos se asignan abajo, de forma individual.</small></label></div><aside class="editor-aside"><img class="photo-preview" id="editor-preview" src="${esc(publicImage(p.thumbnail))}" alt="Vista previa del producto"><label class="field">Imagen principal<input name="thumbnail" value="${esc(p.thumbnail)}" required></label><button type="button" data-upload="thumbnail" class="upload">↑ Subir imagen</button><label class="field">Estado<select name="status">${[
      ["active", "Activo"],
      ["draft", "Borrador"],
      ["archived", "Archivado"],
    ]
      .map(
        ([s, l]) =>
          `<option value="${s}" ${p.status === s ? "selected" : ""}>${l}</option>`,
      )
      .join(
        "",
      )}</select></label><label class="check-label"><input name="collab" type="checkbox" ${p.colaboracion ? "checked" : ""}> Mostrar en Collabs</label><p class="hint">La disponibilidad del fabricante no confirma las existencias de tu tienda.</p></aside></div><div class="section-title"><h3>Tonos y variantes <span id="variant-count">(${p.tonos?.length || 0})</span></h3><input id="variant-search" type="search" placeholder="Buscar dentro de los tonos" aria-label="Buscar tonos del producto"><button type="button" id="add-variant">+ Agregar tono</button></div><p class="hint">Verifica el nombre y la foto con la etiqueta del producto. El color de muestra es orientativo.</p><div class="variant-list" id="variants">${(p.tonos || []).map(variantRow).join("")}</div><div class="history"><select id="history-select" aria-label="Versiones anteriores"><option value="">Historial de cambios</option></select><button type="button" id="restore">Recuperar versión</button></div>`;
  if (!$("#editor").open) $("#editor").showModal();
  if (p.version)
    api("history?key=" + encodeURIComponent(p.key))
      .then((r) => {
        $("#history-select").innerHTML =
          '<option value="">Historial de cambios</option>' +
          r.revisions
            .map(
              (v) =>
                `<option value="${v.id}">${new Date(v.savedAt).toLocaleString("es-GT")} · revisión ${v.id}</option>`,
            )
            .join("");
      })
      .catch((e) => ($("#save-status").textContent = e.message));
}
function closeEditor() {
  if (dirty && !confirm("Tienes cambios sin guardar. ¿Quieres descartarlos?"))
    return;
  $("#editor").close();
  dirty = false;
}
async function load() {
  products = (await api("products")).products;
  render();
}
$("#category").innerHTML += [...SECTIONS]
  .map((s) => `<option value="${s}">${labels[s]}</option>`)
  .join("");
document.addEventListener("click", async (event) => {
  const b = event.target.closest("button");
  if (!b) return;
  try {
    if (b.dataset.view) {
      view = b.dataset.view;
      page = 1;
      render();
    }
    if (b.dataset.edit) editor(products.find((p) => p.key === b.dataset.edit));
    if (b.dataset.close === "editor") closeEditor();
    else if (b.dataset.close) $("#" + b.dataset.close).close();
    if (b.dataset.removeVariant !== undefined) {
      current = readForm();
      current.tonos.splice(Number(b.dataset.removeVariant), 1);
      $("#variants").innerHTML = current.tonos.map(variantRow).join("");
      $("#variant-count").textContent = `(${current.tonos.length})`;
      dirty = true;
    }
    if (b.dataset.upload) {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/png,image/jpeg,image/webp";
      input.onchange = async () => {
        try {
          const file = input.files[0];
          if (!file) return;
          if (file.size > 4 * 1024 * 1024)
            throw Error("La imagen debe pesar menos de 4 MB");
          const data = await new Promise((resolve, reject) => {
            const r = new FileReader();
            r.onload = () => resolve(r.result.split(",")[1]);
            r.onerror = reject;
            r.readAsDataURL(file);
          });
          const result = await api("image", { data });
          const field = $(`[name="${b.dataset.upload}"]`);
          field.value = result.path;
          dirty = true;
          if (b.dataset.upload === "thumbnail")
            $("#editor-preview").src = result.path;
          else b.closest(".variant-row").querySelector("img").src = result.path;
        } catch (e) {
          $("#save-status").textContent = e.message;
        }
      };
      input.click();
    }
    switch (b.id) {
      case "prev":
        page--;
        render();
        break;
      case "next":
        page++;
        render();
        break;
      case "new-product":
        editor({
          key: "producto-" + Date.now(),
          id: "nuevo-" + Date.now(),
          nombre: "",
          marca: "",
          categoria: "",
          _ecSection: "labios",
          precio: null,
          descripcion: "",
          tag: "",
          status: "draft",
          version: 0,
          colaboracion: false,
          thumbnail: "assets/brand/product-placeholder.svg",
          imagenes: [],
          tonos: [],
        });
        break;
      case "add-variant":
        current = readForm();
        current.tonos.push({
          id: current.key + "-" + crypto.randomUUID().slice(0, 8),
          nombre: "",
          hex: "",
          imagen: "",
          descripcion: "",
          aliases: [],
          sku: "",
          availability: "consult",
          review: "pending",
          price: null,
        });
        $("#variants").innerHTML = current.tonos.map(variantRow).join("");
        $("#variant-count").textContent = `(${current.tonos.length})`;
        dirty = true;
        break;
      case "export":
        b.disabled = true;
        status((await api("export", {})).message);
        break;
      case "backup": {
        const result = await api("backup", {});
        const url = URL.createObjectURL(
          new Blob([JSON.stringify(result.products, null, 2)], {
            type: "application/json",
          }),
        );
        const a = document.createElement("a");
        a.href = url;
        a.download = `esmeralda-respaldo-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 3000);
        status(
          "Respaldo JSON descargado y copia SQLite guardada en tu computadora.",
        );
        break;
      }
      case "import":
        $("#import-file").click();
        break;
      case "confirm-import":
        b.disabled = true;
        const result = await api("import", imported);
        $("#import-dialog").close();
        await load();
        status(
          `${result.count} productos importados. Revisa el catálogo antes de actualizar la tienda.`,
        );
        break;
      case "restore": {
        const id = Number($("#history-select").value);
        if (!id) return;
        const restored = await api("restore", {
          key: current.key,
          id,
          version: current.version,
        });
        editor(restored.product);
        await load();
        $("#save-status").textContent =
          "Versión recuperada. La tienda aún no se ha actualizado.";
        break;
      }
      case "logout":
        await api("logout", {});
        location.reload();
        break;
    }
  } catch (e) {
    if ($("#editor").open) $("#save-status").textContent = e.message;
    else {
      status(e.message);
      if ($("#import-dialog").open)
        $("#import-summary").textContent = e.message;
    }
  } finally {
    b.disabled = false;
  }
});
$("#product-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const b = event.submitter;
  b.disabled = true;
  try {
    const result = await api("products", readForm());
    dirty = false;
    editor(result.product);
    await load();
    $("#save-status").textContent =
      "Guardado. Actualiza la tienda cuando estés lista.";
  } catch (e) {
    $("#save-status").textContent = e.message;
  } finally {
    b.disabled = false;
  }
});
$("#editor").addEventListener("cancel", (e) => {
  e.preventDefault();
  closeEditor();
});
$("#login").addEventListener("cancel", (e) => e.preventDefault());
$("#product-form").addEventListener("input", (e) => {
  if (e.target.id === "variant-search") {
    const q = normalizeText(e.target.value);
    document.querySelectorAll("[data-variant]").forEach((row) => {
      row.hidden = !normalizeText(
        row.querySelector('input[name$="-name"]').value +
          " " +
          row.querySelector('input[name$="-sku"]').value,
      ).includes(q);
    });
    return;
  }
  dirty = true;
  if (e.target.name === "thumbnail")
    $("#editor-preview").src = publicImage(e.target.value);
});
$("#search").addEventListener("input", () => {
  page = 1;
  render();
});
$("#category").addEventListener("change", () => {
  page = 1;
  render();
});
$("#import-file").addEventListener("change", async (e) => {
  try {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 6 * 1024 * 1024) throw Error("El archivo supera 6 MB");
    imported = validateCatalog(JSON.parse(await file.text()));
    const existing = imported.filter((p) =>
      products.some((x) => x.key === p.key),
    ).length;
    $("#import-summary").textContent =
      `${imported.length} productos válidos: ${existing} se actualizarán y ${imported.length - existing} se agregarán.`;
    $("#import-dialog").showModal();
  } catch (e) {
    status(e.message);
  } finally {
    $("#import-file").value = "";
  }
});
window.addEventListener("beforeunload", (e) => {
  if (dirty) {
    e.preventDefault();
    e.returnValue = "";
  }
});
document.addEventListener(
  "error",
  (e) => {
    if (e.target instanceof HTMLImageElement && !e.target.dataset.fallback) {
      e.target.dataset.fallback = "1";
      e.target.src = "/assets/brand/product-placeholder.svg";
    }
  },
  true,
);
try {
  const token = new URLSearchParams(location.hash.slice(1)).get("acceso");
  history.replaceState(null, "", "/");
  if (token) csrf = (await api("login", { token })).csrf;
  else csrf = (await api("session")).csrf;
  await load();
} catch (e) {
  $("#login-error").textContent = e.message;
  if (!$("#login").open) $("#login").showModal();
}

# Esmeralda's Cosmetic - Página oficial

Página estática compatible con GitHub Pages para catálogo de maquillaje, skin care, accesorios y colaboraciones.

## Estructura principal

- `index.html`: inicio.
- `rostro.html`, `ojos.html`, `labios.html`, `skincare.html`, `cuerpo.html`, `accesorios.html`, `collabs.html`: secciones de productos.
- `preguntas.html`: preguntas frecuentes.
- `agregar-producto.html`: ruta privada para generar bloques de producto.
- `producto.html`: ficha automática para cualquier producto usando `?categoria=...&id=...`.

## Base de productos por sección

Los productos están separados por archivo en:

```txt
assets/js/productos/
├── core.js
├── rostro.js
├── ojos.js
├── labios.js
├── skincare.js
├── cuerpo.js
├── accesorios.js
├── collabs.js
└── inicio.js  (ya no lo usa el inicio; se conserva como respaldo)
```

## Capa de tienda oficial

La experiencia de venta está en:

- `assets/css/tienda-oficial.css`
- `assets/js/tienda-oficial.js`

Incluye buscador inteligente, pedido por WhatsApp, precios visibles, tonos con imagen opcional, visor grande tipo tienda, ficha automática por producto y mejoras visuales sin backend.


## Productos en Collabs

Para que cualquier producto aparezca también en la sección Collabs, agrégale esta propiedad dentro del bloque del producto:

```js
colaboracion: true,
```

No uses `tag` para esto. `tag` es solo una etiqueta visual como Nuevo, PR BOX o Edición limitada. `colaboracion` es la propiedad que organiza el producto en Collabs.

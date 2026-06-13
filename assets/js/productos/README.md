# Productos por sección

Edita estos archivos para manejar los productos de la página.

- `core.js`: registro interno, no agregues productos aquí.
- `rostro.js`: productos de rostro.
- `ojos.js`: productos de ojos.
- `labios.js`: productos de labios.
- `skincare.js`: productos de skin care.
- `cuerpo.js`: productos de cuerpo.
- `accesorios.js`: productos de accesorios.
- `collabs.js`: productos de colaboraciones.
- `inicio.js`: productos destacados del inicio.


## Productos en Collabs

Para que cualquier producto aparezca también en la sección Collabs, agrégale esta propiedad dentro del bloque del producto:

```js
colaboracion: true,
```

No uses `tag` para esto. `tag` es solo una etiqueta visual como Nuevo, PR BOX o Edición limitada. `colaboracion` es la propiedad que organiza el producto en Collabs.

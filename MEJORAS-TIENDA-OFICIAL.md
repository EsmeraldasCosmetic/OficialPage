# Mejoras aplicadas a la tienda oficial

- Se quitó el traductor automático.
- Se mejoró el visor de producto para que sea más grande y más parecido a una tienda online.
- Se mejoró el precio visible en tarjetas y modal.
- Los productos sin precio muestran `Precio pendiente`.
- Se agregó `producto.html`, una ficha automática por producto usando query string.
- El inicio ahora carga los productos desde las bases reales de cada sección.
- El inicio muestra productos nuevos con base en `tag: "Nuevo"`, `fechaAgregado` y el último producto agregado por sección.
- Se agregaron secciones dinámicas al inicio: compra por categoría y productos con tonos.
- Los tonos pueden cambiar la imagen principal si incluyen `imagen`.

Ejemplo de ficha automática:

```txt
producto.html?categoria=labios&id=4
```


## Productos en Collabs

Para que cualquier producto aparezca también en la sección Collabs, agrégale esta propiedad dentro del bloque del producto:

```js
colaboracion: true,
```

No uses `tag` para esto. `tag` es solo una etiqueta visual como Nuevo, PR BOX o Edición limitada. `colaboracion` es la propiedad que organiza el producto en Collabs.

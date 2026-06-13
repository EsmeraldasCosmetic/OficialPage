# Guía rápida de productos - Esmeralda's Cosmetic

La página funciona sin base de datos real para que se pueda subir a GitHub Pages. Los productos viven en archivos JS separados por sección:

```txt
assets/js/productos/rostro.js
assets/js/productos/ojos.js
assets/js/productos/labios.js
assets/js/productos/skincare.js
assets/js/productos/cuerpo.js
assets/js/productos/accesorios.js
assets/js/productos/collabs.js
```

## Cómo agregar un producto

1. Abre `agregar-producto.html` en el navegador.
2. Llena nombre, categoría, imágenes, precio, estado y tonos.
3. Presiona **Generar código**.
4. Copia el bloque.
5. Pégalo al final del arreglo del archivo correcto, antes del cierre `];`.

El generador agrega `tag: "Nuevo"` y `fechaAgregado` por defecto. Eso ayuda a que el producto aparezca automáticamente en el inicio como producto nuevo.


## Marca

Puedes agregar la marca del producto así:

```js
marca: "Beauty Creations",
```

La marca se muestra en las tarjetas, en la ficha completa y también ayuda al buscador. Si no escribes `marca`, la tienda intenta detectarla desde el nombre del producto, por ejemplo Beauty Creations, Prosa o colaboraciones.

## Precio

Puedes poner:

```js
precio: 125,
```

Si no pones precio, la tienda mostrará **Precio pendiente**.

## Tonos con imagen

Puedes agregar tonos así:

```js
tonos: [
  { nombre: "Natural", hex: "#d7a784", imagen: "img/rostro/base/natural.webp" },
  { nombre: "Beige", hex: "#c99169", imagen: "img/rostro/base/beige.webp" }
]
```

Cuando la clienta elige un tono, el visor cambia la imagen principal si ese tono tiene `imagen`.

## Página automática por producto

Cada producto tiene ficha automática usando:

```txt
producto.html?categoria=rostro&id=2
```

No tienes que crear una página HTML por cada producto. La página `producto.html` lee la categoría y el id desde el enlace.

## Inicio dinámico

El inicio ya no depende de `inicio.js`. Ahora carga los archivos reales de cada sección y muestra productos recientes automáticamente. Para que el orden sea más preciso, deja `fechaAgregado` en los productos nuevos.


## Productos en Collabs

Para que cualquier producto aparezca también en la sección Collabs, agrégale esta propiedad dentro del bloque del producto:

```js
colaboracion: true,
```

No uses `tag` para esto. `tag` es solo una etiqueta visual como Nuevo, PR BOX o Edición limitada. `colaboracion` es la propiedad que organiza el producto en Collabs.

# Diccionario de gemas

Los nombres de gemas organizan el proyecto. No son contraseñas ni mecanismos para ocultar datos públicos.

| Gema      | Responsabilidad                                                        | Archivo o carpeta                                     |
| --------- | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| Esmeralda | Base SQLite, relaciones, historial y respaldos                         | `scripts/gemas/esmeralda.mjs`                         |
| Rubí      | Administración local con formularios                                   | `rubi/` y `scripts/admin.mjs`                         |
| Ónix      | Validación de datos, imágenes y acceso HTTP                            | `assets/gemas/onix.js`, `scripts/gemas/onix-http.mjs` |
| Zafiro    | Búsqueda por nombres, códigos y sinónimos; identificación de variantes | `assets/gemas/zafiro.js`                              |
| Amatista  | Fichas, muestras de color y selección de tonos                         | `assets/gemas/amatista.js` y `.css`                   |
| Perla     | Campañas y menú de colecciones                                         | `assets/gemas/perla.js` y `.css`                      |

## Base local

La base de trabajo se crea en `.private/esmeralda.sqlite` la primera vez que ejecutas `npm run admin`. Se inicializa a partir del catálogo entregado. En usos posteriores, conserva tus cambios: no sobrescribe la base con el JSON de la tienda.

| Tabla       | Clave                      | Contenido                                                                                                          |
| ----------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `products`  | `key`                      | Nombre, marca, categoría, tipo, descripción, precio base, imagen principal, estado, versión y fecha de edición     |
| `variants`  | `id`                       | Relación con producto, nombre de tono, SKU, color, fotografía, aliases, disponibilidad, revisión y precio opcional |
| `media`     | `product_key` + `position` | Galería ordenada de cada producto                                                                                  |
| `revisions` | `id`                       | Copia de cada versión anterior, producto y fecha                                                                   |
| `metadata`  | `key`                      | Estado de inicialización de la base                                                                                |

Las variantes y galerías tienen claves foráneas hacia productos. Los precios se guardan como centavos enteros en SQLite. Las consultas utilizan parámetros. Los cambios de producto y sus variantes se guardan en una transacción; un error revierte todo el cambio.

## Campos del catálogo

| Campo          | Significado                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------- |
| `key`          | Identificador permanente del producto, como `labios-2`. No debe renombrarse al cambiar categoría. |
| `nombre`       | Nombre visible, máximo 200 caracteres.                                                            |
| `_ecSection`   | `rostro`, `ojos`, `labios`, `skincare`, `cuerpo` o `accesorios`.                                  |
| `categoria`    | Tipo de producto, por ejemplo `Lipgloss`.                                                         |
| `marca`        | Marca o colaboración comercial.                                                                   |
| `precio`       | Número en quetzales o `null` para confirmar por WhatsApp.                                         |
| `thumbnail`    | Imagen principal: archivo bajo `assets/` o HTTPS de un origen permitido.                          |
| `imagenes`     | Galería, sin entradas vacías y máximo 150 imágenes.                                               |
| `colaboracion` | `true` para aparecer también en Collabs.                                                          |
| `status`       | `active`, `draft` o `archived`. Solo `active` se publica.                                         |
| `version`      | Control de ediciones simultáneas; no se publica en Pages.                                         |
| `tonos`        | Lista de variantes, o `null` si no existen.                                                       |

Cada variante tiene un `id` permanente, `nombre`, `sku`, `hex`, `imagen`, `descripcion`, `aliases`, `availability`, `review` y `price`. El `price` de una variante es opcional; vacío hereda el precio del producto. `hex` es solo una muestra orientativa. Los aliases mantienen búsquedas con nombres anteriores y permiten recuperar pedidos antiguos.

`availability`: `consult` (confirmar), `available` (disponible) o `soldout` (agotado). Un tono agotado no se puede añadir al pedido. No hay reservas ni descuento automático de existencias: el cierre de la compra sigue siendo por WhatsApp.

`review`: `verified` (asociación verificada), `inherited` (asociación heredada por revisar) o `pending` (sin confirmación). Este estado sirve al administrador y no se publica en el catálogo de Pages.

## Flujo de actualización

```text
Formularios de Rubí → validación Ónix → SQLite Esmeralda
                               ↓
                        historial y respaldo
                               ↓
            «Actualizar tienda» → data/products.json
                               ↓
             commit en GitHub → validación y build
                               ↓
                dist/ → catálogo público en Pages
```

El JSON es una exportación publicable, no el lugar donde necesitas editar diariamente. Conserva además un respaldo JSON completo desde Rubí para incluir borradores y archivados. Si mueves el proyecto a otra computadora, importa ese respaldo en el nuevo administrador.

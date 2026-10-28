# Esmeralda's Cosmetic · Colección Gemas

Tienda de cosméticos con campañas amplias, menú por colecciones, búsqueda predictiva, fichas completas, vista rápida y selección de tonos. La experiencia toma como referencia Beauty Creations, manteniendo los colores, logos y fuentes originales de Esmeralda's.

**106 productos · 434 variantes · administración local con SQLite · publicación estática en GitHub Pages.**

## Empezar

Requiere **Node.js 22.13 o superior** (se recomienda Node 24). No necesitas instalar dependencias.

Para ver la tienda:

```sh
node scripts/serve.mjs
```

Abre **http://127.0.0.1:4173**. También puedes usar `npm run dev`.

Para administrar productos, abre otra terminal en esta carpeta:

```sh
node scripts/admin.mjs
```

También puedes usar `npm run admin` o hacer doble clic en **INICIAR-ADMIN.cmd** en Windows. Abre el enlace privado que imprime la terminal; es de un solo uso. Deja la terminal abierta mientras uses el panel. Si cierras sesión o necesitas otro enlace, reinicia el administrador.

## Actualizar productos sin editar código

1. Abre **Rubí** mediante el enlace local del administrador.
2. Busca un producto y pulsa **Editar**, o usa **Agregar producto**.
3. Cambia nombre, precio, categoría, descripción, imágenes y estado. Puedes subir fotos PNG, JPEG o WebP de hasta 4 MB desde tu computadora.
4. En **Tonos y variantes**, busca el tono y edita nombre, código, foto, color, precio opcional y disponibilidad. Los nuevos productos empiezan como borradores.
5. Pulsa **Guardar producto**. El cambio se guarda en SQLite y se conserva la versión anterior.
6. Cuando quieras mostrar los cambios, pulsa **Actualizar tienda**. Esto exporta los productos activos a `data/products.json`.
7. Sube a GitHub el JSON y las nuevas imágenes junto con los demás cambios. GitHub Actions compila y publica el sitio.

**Guardar en Rubí no publica en Internet.** El panel diferencia guardar, actualizar el archivo de la tienda y desplegar en GitHub. Puedes revisar el resultado local antes de subirlo.

Desde **Respaldo** descargas un JSON de toda la base, incluidos borradores y archivados; también se crea una copia SQLite. **Importar** muestra un resumen antes de aplicar cambios, actualiza productos con la misma clave y conserva los que no están en el archivo. El historial de cada producto permite recuperar una versión anterior.

## Publicar en GitHub Pages

1. Crea un repositorio y sube el contenido del ZIP de entrega a la rama `main`, con `index.html`, `package.json` y `.github/` en la raíz.
2. En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions**.
3. Ejecuta **Publicar en GitHub Pages** desde **Actions → Run workflow**, o realiza un nuevo commit en `main`.
4. El flujo ejecuta las pruebas, valida los datos y publica únicamente `dist/`.

Si usas otra rama principal, cambia `branches: [main]` en `.github/workflows/pages.yml`. Las rutas son relativas y funcionan dentro de un repositorio como `/mi-tienda/`.

La base `.private/esmeralda.sqlite`, sus respaldos y el enlace de acceso **no se incluyen en Git, en el ZIP ni en el sitio compilado**. El código del panel puede ser visible si el repositorio es público, pero el panel y su servidor no se ejecutan en GitHub Pages.

## Compra y búsqueda

- Búsqueda por producto, marca, nombre de tono, SKU y algunos sinónimos en español/inglés; filtros de categoría, marca, presupuesto y productos con variantes.
- Selección de tono desde tarjetas y fichas. El nombre, foto y precio cambian con la variante; una variante sin foto vuelve a la imagen general con una aclaración.
- Favoritos, cantidades, pedido persistente y enlaces que pueden incluir el tono elegido.
- Tonos agotados deshabilitados. El precio por variante, si existe, se utiliza en el pedido; si no, se hereda el precio base.
- Pedido y consulta de contacto por WhatsApp al número original **+502 3573 9640**.
- No hay cobro con tarjeta, inventario reservado ni cuentas de cliente. Disponibilidad, envío y pago se acuerdan por WhatsApp.

## Revisión de tonos

Se contrastaron nombres/códigos con las variantes publicadas por Beauty Creations y se verificaron **229 asociaciones de tono e imagen**. Hay **282 variantes con fotografía** local. Se corrigieron enlaces desplazados en Ultra Dazzle, nombres comprobables y entradas de galería nulas. Los nombres anteriores se conservan como aliases.

No todas las variantes se pueden verificar con las fuentes disponibles. **205 requieren revisión**, de las cuales 153 están marcadas como pendientes y 52 conservan asociaciones heredadas. En Rubí, **Revisar tonos** permite encontrarlas. No se inventaron imágenes ni se tomó el inventario del fabricante como existencia de la tienda. Los HEX originales son orientativos.

Algunas fotos adicionales de galerías conservan enlaces externos del catálogo original. Si fallan, se muestra un marcador de imagen pendiente. La foto principal de Fairy Tale — Tiana continúa pendiente de reemplazo.

Lee los cambios y fuentes en [Auditoría de tonos](docs/AUDITORIA-TONOS.md). Las tres denominaciones de Ultra Dazzle que no coinciden con la versión actual del fabricante se conservaron para verificar la etiqueta física.

## Datos y seguridad

- [Diccionario de gemas y estructura de datos](docs/DICCIONARIO-GEMAS.md)
- [Controles de seguridad y límites](docs/SEGURIDAD.md)

Esmeralda es la base; Rubí, el panel; Ónix valida y protege los accesos; Zafiro gestiona búsquedas; Amatista presenta productos; Perla organiza campañas y menús. Los nombres no son una medida de seguridad: la protección proviene de separar los datos privados, validar entradas y controlar el acceso local.

## Verificar y compilar

```sh
node --test tests/*.test.mjs
node scripts/validate.mjs
node scripts/build.mjs
node scripts/serve.mjs dist
```

Equivalentes: `npm test`, `npm run validate` y `npm run build`. Cierra el servidor anterior del puerto 4173 antes de servir `dist`.

La compilación conserva accesos antiguos como `labios.html`, `contacto.html` y `producto.html?categoria=labios&id=2`. La ficha actual usa `#producto/labios-2` y admite `?tono=identificador-de-variante`.

## Archivos principales

```text
index.html                  Estructura de la tienda
assets/app.js               Navegación, vistas, favoritos y pedido
assets/store.js             Precios y validación del pedido
assets/gemas/               Búsqueda, validación y componentes visuales
assets/fonts/               Tipografías locales
assets/images/              Fotografías de productos, campañas y tonos
data/products.json          Exportación del catálogo para publicar
rubi/                       Interfaz local de administración
scripts/admin.mjs           Servidor local de Rubí
scripts/gemas/              SQLite y seguridad HTTP
scripts/build.mjs           Compilación mediante lista explícita
docs/                       Diccionario, seguridad y auditoría
tests/                      Pruebas de negocio, base y API local
.private/                   Base, historial, respaldos y enlace (no publicar)
```

El catálogo no contiene datos personales de clientes. Guarda cualquier información confidencial fuera del repositorio. Para administrar remotamente o con varios usuarios, se necesitaría un backend con autenticación, roles y HTTPS; el panel local no debe exponerse en Internet.

Las fuentes Montserrat y Bebas Neue incluyen sus licencias OFL. Playlist Script, logos y fotografías proceden de los materiales originales o de sus fuentes de producto; utiliza los permisos correspondientes de sus titulares. La referencia de diseño no incorpora el tema comercial, el checkout ni los scripts de seguimiento de la otra tienda.

Integración Supabase preparada: consulta [la guía paso a paso](docs/SUPABASE.md). El catálogo remoto todavía no está activado; faltan la clave pública y la estructura de las tablas.


Existencias por producto y tono: consulta [la guía de inventario](docs/EXISTENCIAS.md). Incluye administración local y activación del stock en Supabase.


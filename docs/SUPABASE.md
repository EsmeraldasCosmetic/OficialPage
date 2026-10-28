# Supabase para Esmeraldas

## 1. Estado y credenciales públicas

Proyecto esperado: **EsmeraldasCosmetic's**, ref `nekbrpqthteyeymjnxwk`.
URL: `https://nekbrpqthteyeymjnxwk.supabase.co`.
REST: `https://nekbrpqthteyeymjnxwk.supabase.co/rest/v1/`.

Verificado el 28 de octubre de 2026: la clave publicable configurada fue aceptada por esta URL. Las tres tablas respondieron HTTP 200 y devolvieron una fila en la prueba limitada a una fila por tabla. Esto verifica lectura real, no la correcta protección de borradores ni permisos de escritura. No se puede calcular una clave desde el nombre o ID.

1. Abre el Dashboard y selecciona el proyecto. Comprueba que su URL contiene `/project/nekbrpqthteyeymjnxwk`.
2. Ve a **Settings → API / API Keys → Publishable API keys** (el nombre del menú puede variar). Copia una clave publicable, normalmente `sb_publishable_…`.
3. Si ves la pestaña **Legacy API Keys**, copia exclusivamente **anon**, nunca **service_role**. El prefijo `eyJ…` indica un JWT, pero no garantiza que sea anon: también lo usan claves privadas legacy.
4. Pega la clave en `assets/js/productos/supabase-config.js`:

```js
window.EC_SUPABASE_CONFIG = Object.freeze({
  url: "https://nekbrpqthteyeymjnxwk.supabase.co",
  publishableKey: "PEGAR_AQUI_LA_PUBLISHABLE_KEY"
});
```

`Object.freeze` evita cambios accidentales al objeto; no oculta la clave ni protege la base. La publicable puede estar en GitHub y será visible en el navegador. Contraseñas PostgreSQL, connection strings con contraseña, secret keys y service_role no pueden estar en HTML, JS, repositorio ni artefactos. Si ya se publicó un secreto, revócalo/rótalo; borrarlo del último archivo no basta.

## 2. Cabeceras correctas

| Acceso | apikey | Authorization |
| --- | --- | --- |
| Catálogo anónimo, clave moderna | `sb_publishable_…` | Omitir |
| Catálogo anónimo, legacy anon | JWT anon `eyJ…` | `Bearer <mismo JWT anon>` |
| Usuario autenticado (futuro) | Clave pública del proyecto | `Bearer <access_token del usuario>` |

**`sb_publishable_…` no es legacy ni JWT.** No uses `Authorization: Bearer sb_publishable_…`. No hacen falta ambas cabeceras para una lectura pública moderna. El cliente preparado implementa las dos primeras filas; no implementa sesiones de usuario.

Fuente: [API keys de Supabase](https://supabase.com/docs/guides/getting-started/api-keys).

## 3. Conexión JavaScript preparada

`index.html` carga la configuración antes de `assets/app.js`. La CSP del HTML y del servidor local permite conexiones únicamente al propio sitio y al proyecto indicado.

Ejemplo desde un módulo del navegador, una vez confirmadas las columnas:

```js
import { createCatalogClient } from './assets/js/productos/supabase-client.js';
const client = createCatalogClient(window.EC_SUPABASE_CONFIG);
// Sustituye los nombres de columnas por los reales y públicos:
const rows = await client.read('productos', {
  select: 'id,nombre', limit: 24, offset: 0, order: 'id.asc'
});
```

El cliente usa GET, timeout de 15 segundos, no envía cookies, rechaza redirecciones y limita las tablas. Una tabla fuera de la lista se rechaza localmente, pero la protección real es RLS en PostgreSQL. Usa orden estable y páginas sucesivas; una sola consulta no garantiza obtener todo el catálogo.

**La tienda lee el catálogo base desde `data/products.json` y el inventario remoto desde Supabase.** El catálogo y las existencias se relacionan por `seccion` + `id`/`producto_id`; las reglas públicas exponen solo productos activos y sus imágenes/tonos asociados. Ejecuta `docs/supabase-audit.sql` en SQL Editor y comparte sus resultados (solo estructura/permisos, sin claves ni registros). Después se podrá mapear productos, imágenes y tonos al formato que ya valida `assets/gemas/onix.js`. El administrador Rubí sigue siendo local; guardar allí no actualiza Supabase.

Columnas observadas en las respuestas REST del 28 de octubre de 2026:

- `productos`: seccion, id, nombre, categoria, marca, precio, estado, descripcion, tag, colaboracion, fecha_agregado, activo, orden, extras.
- `producto_imagenes`: seccion, producto_id, orden, url.
- `producto_tonos`: seccion, producto_id, orden, nombre, hex, imagen, descripcion, tono, extras.

No se deducen tipos, claves foráneas ni unicidad a partir de una fila. En particular, no existe `status` en la respuesta de productos: el ejemplo genérico de políticas de abajo NO coincide con este esquema. Hay que confirmar el significado de `activo`/`estado` y si la relación utiliza tanto `seccion` como `producto_id` antes de preparar una migración.

## 4. Seguridad en la base

Antes de publicar la conexión, revisa el SQL de auditoría. Configuración objetivo:

- Activar RLS en las tres tablas. Habilitar RLS sin políticas deniega filas a los roles normales; revisa el impacto en clientes existentes.
- Permitir al rol `anon` únicamente SELECT de columnas destinadas al catálogo. No exponer costos internos, notas privadas ni datos de clientes.
- Permitir filas de productos publicados mediante una política SELECT; cada imagen/tono debe pertenecer a un producto publicado. El filtro del navegador no es una barrera de seguridad.
- Revocar INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES y TRIGGER a PUBLIC/anon/authenticated según los usos existentes. Revisar también permisos por columna, políticas anteriores, vistas y funciones RPC: pueden ofrecer otras vías de acceso. Políticas permisivas se combinan con OR; añadir una política restrictiva en intención no anula otra que permita todo.
- No conceder administración por estar simplemente autenticado. Para esta tienda sin backend, editar desde el Dashboard con la cuenta administradora. Un panel remoto necesitará Supabase Auth y políticas específicas de administradores.

Ejemplo de políticas **solo si** la auditoría confirma `productos.id`, `productos.status` con valor `active` y `producto_id` en las tablas hijas; no ejecutarlo sin adaptar las columnas y revisar políticas existentes:

```sql
begin;
alter table public.productos enable row level security;
alter table public.producto_imagenes enable row level security;
alter table public.producto_tonos enable row level security;

revoke all on public.productos, public.producto_imagenes, public.producto_tonos
  from public, anon, authenticated;
grant usage on schema public to anon;
-- Dar SELECT de columnas explícitas según el resultado de la auditoría.
-- Ejemplo mínimo, no catálogo completo:
grant select (id, nombre, status) on public.productos to anon;
grant select (producto_id) on public.producto_imagenes, public.producto_tonos to anon;

create policy esmeralda_productos_lectura on public.productos
for select to anon using (status = 'active');
create policy esmeralda_imagenes_lectura on public.producto_imagenes
for select to anon using (exists (
  select 1 from public.productos p where p.id = producto_id and p.status = 'active'
));
create policy esmeralda_tonos_lectura on public.producto_tonos
for select to anon using (exists (
  select 1 from public.productos p where p.id = producto_id and p.status = 'active'
));
rollback; -- Ejemplo de ensayo. No aplica cambios permanentes.
```

No es una migración lista para producción: los permisos por columna previos deben revisarse aparte y faltan las columnas públicas reales. No se han aplicado cambios al proyecto remoto.

Fuente: [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security).

## 5. Verificación paso a paso

1. Tras copiar la clave pública, ejecuta `node scripts/verify-supabase.mjs`. Consulta las tres tablas con un máximo de una fila y no imprime registros ni credenciales. Usa `select=*` para diagnóstico; si solo autorizas ciertas columnas, adapta esa selección a la lista permitida.
2. Una respuesta 2xx verifica que la API acepta URL/clave y SELECT. Una lista vacía también puede significar RLS denegando todas las filas: no demuestra que la tienda tenga acceso a los productos correctos.
3. En legacy se comprueban localmente `role=anon`, `ref` y expiración. Decodificar JWT no verifica su firma. Las claves modernas son opacas: confirmar el proyecto en Dashboard y probar su API es necesario.
4. En SQL Editor inspecciona RLS, permisos y políticas. En una copia de pruebas crea un producto publicado y otro borrador con imágenes/tonos; confirma que el acceso anónimo ve solo el publicado y ninguno de los hijos del borrador. Prueba INSERT/UPDATE/DELETE con registros de prueba: deben ser rechazados o afectar cero filas, y comprueba el estado después. No hagas ensayos de escritura sobre productos reales.
5. Ejecuta `node --test tests/*.test.mjs` y `node scripts/build.mjs`. Las pruebas automatizadas del cliente usan respuestas simuladas, no certifican la seguridad remota.
6. Ejecuta `node scripts/serve.mjs dist`, abre el sitio por HTTP y revisa Network/Console. Tras activar el adaptador del catálogo, comprueba respuestas REST, imágenes, tonos, búsquedas, carrito y móvil; también en el subdirectorio de GitHub Pages.

Errores: 401 suele indicar clave inválida, proyecto equivocado o Bearer incorrecto; 403 apunta a permisos; 400 puede indicar columnas/relaciones incorrectas; 404 una tabla/ruta no expuesta. Un error de red puede ser CSP, conectividad o proyecto pausado. No desactives RLS para resolverlo.

## 6. GitHub Pages

Publica `dist/` con el flujo existente. Rutas de scripts relativas permiten un repositorio bajo `/nombre-del-repo/`. No hacen falta secretos de GitHub Actions para la clave pública. `.env` está ignorado, pero cualquier valor incluido en el bundle será público. GitHub Pages no procesa `.env` ni ejecuta PostgreSQL: los permisos se aplican en Supabase. Las imágenes alojadas en Storage requieren revisar aparte sus políticas y la lista de imágenes permitidas del sitio.

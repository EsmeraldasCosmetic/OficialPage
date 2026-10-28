# Existencias

Ya se pueden guardar cantidades en el administrador local Rubí. Reinicia el administrador si estaba abierto para cargar la actualización de su base SQLite. Edita un producto, introduce existencias, guarda y exporta el catálogo; después compila/publica para actualizar el sitio estático.

- Sin tonos: completa **Existencias (solo productos sin tonos)**.
- Con tonos: completa **Existencias de este tono** en cada variante. El campo general no se suma ni limita los tonos.
- Vacío: disponibilidad por confirmar. Cero: agotado. Enteros positivos: unidades disponibles.
- No se han asignado cantidades inventadas. El estado manual «Agotado» también bloquea un tono en modo local; cámbialo al reponer.

La ficha muestra las unidades al elegir un tono y el carrito limita la cantidad acumulada, incluso al restaurar un pedido guardado. Las cantidades públicas son visibles para cualquier visitante.

## Guardarlas en Supabase

1. Ejecuta `docs/supabase-stock.sql` en SQL Editor del proyecto `nekbrpqthteyeymjnxwk`. Añade dos columnas y una protección contra cambios públicos de stock. No se ha ejecutado remotamente: la clave pública no permite administrar el esquema. Si ya existe alguna columna, el script aborta completo para poder revisar su definición.
2. En **Table Editor → productos**, completa `stock` para productos sin tonos. En **producto_tonos**, completa `stock` por tono. Conserva `seccion`, IDs y nombres exactos: se utilizan para vincular el inventario a los productos locales. Confirma que `activo` es booleano y vale `true` en los productos publicados.
3. Ejecuta la auditoría de permisos de `docs/supabase-audit.sql`. Las tablas deben tener RLS y políticas de lectura para productos publicados y sus hijos. El script de stock no reemplaza esa revisión. No otorgues UPDATE a visitantes ni publiques una service_role.
4. En `assets/js/productos/supabase-config.js`, cambia `inventorySource: "local"` a `inventorySource: "supabase"`. Compila y publica. Las fotos y descripciones seguirán en el catálogo local; las existencias se consultarán en Supabase al cargar la página.
5. Prueba un producto sin tonos con 2 unidades y un tono con 0. El primero debe limitar el carrito a 2 y el segundo aparecer agotado. Recarga después de editar en Supabase. Los productos sin correspondencia remota, inactivos o sin un tono coincidente se bloquean; duplicados provocan un error de carga. Un fallo remoto tampoco usa cantidades locales antiguas como sustituto.

Rubí local y Supabase son dos fuentes distintas: editar Rubí no sincroniza Supabase. Elige una fuente de inventario. En modo Supabase administra las cantidades desde Table Editor.

## Ventas y límites

Agregar al carrito o abrir WhatsApp NO reserva ni descuenta existencias. El inventario es una consulta al cargar la página, no una garantía contra ventas simultáneas. Confirma la disponibilidad y actualiza las unidades al cerrar una venta. Para descuentos automáticos hará falta registrar pedidos y descontar stock en una transacción autorizada en el servidor; nunca mediante escrituras anónimas desde el navegador.

Referencia: [Tablas y columnas en Supabase](https://supabase.com/docs/guides/database/tables).

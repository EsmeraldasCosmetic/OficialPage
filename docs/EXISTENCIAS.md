# Existencias

Ya se pueden guardar cantidades en el administrador local Rubí. Reinicia el administrador si estaba abierto para cargar la actualización de su base SQLite. Edita un producto, introduce existencias, guarda y exporta el catálogo; después compila/publica para actualizar el sitio estático.

- Sin tonos: completa **Existencias (solo productos sin tonos)**.
- Con tonos: completa **Existencias de este tono** en cada variante. El campo general no se suma ni limita los tonos.
- Vacío: disponibilidad por confirmar. Cero: agotado. Enteros positivos: unidades disponibles.
- No se han asignado cantidades inventadas. El estado manual «Agotado» también bloquea un tono en modo local; cámbialo al reponer.

La ficha muestra las unidades al elegir un tono y el carrito limita la cantidad acumulada, incluso al restaurar un pedido guardado. Las cantidades públicas son visibles para cualquier visitante.

## Guardarlas en Supabase

1. Las columnas `stock` y su protección ya están aplicadas en el proyecto `nekbrpqthteyeymjnxwk`.
2. Edita las existencias en Rubí y ejecuta `npm run stock:sql` para generar el SQL correspondiente al catálogo actual.
3. Revisa el resultado y ejecuta el SQL completo en **Supabase → SQL Editor**. Para eliminar cantidades individuales usa `null`; cero muestra el producto o tono como agotado.
4. También puedes editar directamente **Table Editor → productos** y **producto_tonos**. Conserva `seccion`, IDs y nombres exactos: se utilizan para vincular el inventario al catálogo local.
5. La tienda consulta Supabase desde `assets/js/productos/supabase-config.js` mediante `inventorySource: "supabase"`.
6. Prueba un producto sin tonos con 2 unidades y un tono con 0. El primero limita el carrito a 2 y el segundo aparece agotado.

Rubí local y Supabase son dos fuentes distintas: editar Rubí no sincroniza Supabase. Elige una fuente de inventario. En modo Supabase administra las cantidades desde Table Editor.

## Ventas y límites

Agregar al carrito o abrir WhatsApp NO reserva ni descuenta existencias. El inventario es una consulta al cargar la página, no una garantía contra ventas simultáneas. Confirma la disponibilidad y actualiza las unidades al cerrar una venta. Para descuentos automáticos hará falta registrar pedidos y descontar stock en una transacción autorizada en el servidor; nunca mediante escrituras anónimas desde el navegador.

Referencia: [Tablas y columnas en Supabase](https://supabase.com/docs/guides/database/tables).

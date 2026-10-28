# Verificación de la entrega

Pruebas realizadas el 28 de octubre de 2026 sobre la versión Colección Gemas.

- **14 pruebas automatizadas** con Node: validación, precios, búsqueda de tonos, aliases, variantes agotadas, SQLite, transacciones, historial, conflicto entre ediciones, sesión local, CSRF, importación y exportación.
- **35 combinaciones de página y ancho** verificadas en Chrome: inicio, catálogo de labios, catálogo de rostro, historia, contacto, ayuda y favoritos, en 320, 390, 768, 1024 y 1440 píxeles. Sin desbordamiento horizontal detectado.
- Navegación de campañas, megamenú, cierre con Escape, sugerencias de búsqueda, menú móvil y selección de variantes comprobados.
- Pedido con tono y cantidad, persistencia, eliminación, búsqueda vacía y selección obligatoria comprobados durante las revisiones.
- Sitio compilado servido bajo una subruta de repositorio; fichas completas, vista rápida y URLs anteriores verificados. Se comprobó que no quedan IDs duplicados al pasar de vista rápida a ficha.
- Peticiones sin sesión, escritura sin CSRF, origen ajeno y subida de SVG rechazadas. Rutas privadas, código del administrador y archivos de Git no se sirven desde el servidor de tienda.
- Inspección visual del inicio, menú, catálogo, ficha de producto y panel Rubí en escritorio y móvil. Las fotografías externas de las galerías pueden variar en disponibilidad; las imágenes principales disponibles y 282 fotos asociadas a variantes se guardaron localmente.

## Repetir pruebas de código

```sh
npm test
npm run validate
npm run build
```

Estas pruebas no verifican inventario físico, disponibilidad comercial, pagos, entregas reales ni el resultado de un despliegue en una cuenta de GitHub. No se enviaron pedidos de WhatsApp ni se publicó el sitio durante la verificación.

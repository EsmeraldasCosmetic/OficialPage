# Seguridad y límites

## Separación de administración y tienda

- La tienda publicada en GitHub Pages es estática. No tiene un endpoint que permita guardar productos, ni credenciales de base de datos.
- Rubí escucha únicamente en `127.0.0.1:4174`. No está diseñado para desplegarse en Internet.
- SQLite, los respaldos y el enlace de acceso están en `.private/`, excluido de Git y del ZIP de entrega. El compilador usa una lista explícita de carpetas; no copia `rubi/`, `scripts/` ni `.private/` a `dist/`.
- En un repositorio público, el código fuente de Rubí y los datos que subas al repositorio pueden leerse. Esto no permite acceder a la base local. Nunca guardes secretos o datos de clientes en archivos destinados a GitHub.
- Borradores y archivados se excluyen del catálogo compilado, junto con el control de versiones y los estados internos de revisión. Las imágenes subidas no utilizadas por productos activos tampoco se copian al sitio final. Los archivos que tú subas a un repositorio público siguen siendo visibles en ese repositorio.

## Controles implementados

- Enlace de inicio local con token aleatorio de 256 bits y un solo uso; se limpia de la barra de dirección al iniciar sesión.
- Sesión en cookie `HttpOnly` y `SameSite=Strict`, caducidad de cuatro horas, validación exacta del host y del origen, y token CSRF para cada operación de escritura. El acceso local usa HTTP; no es una configuración de autenticación para producción.
- Límite de intentos de acceso y de tamaño de peticiones/importaciones. Tiempo máximo de solicitud.
- Importación de datos como JSON, sin ejecutar código. Campos permitidos y límites de longitud; precios, categorías, claves y variantes validados en servidor y cliente.
- Rutas de imagen y orígenes HTTPS permitidos. La aplicación no descarga URLs proporcionadas al administrador desde el servidor, evitando convertir el panel en un proxy de red.
- Subidas limitadas a PNG, JPEG y WebP de hasta 4 MB, con comprobación de firma y nombre de archivo aleatorio. No se aceptan SVG ni HTML como subidas. La comprobación de firma no equivale a un análisis antivirus.
- Escape de texto antes de generar HTML. CSP que restringe scripts al propio origen, sin `eval` ni scripts en línea. Los estilos en línea se permiten para muestras de color validadas.
- Consultas SQL parametrizadas, transacciones, claves foráneas y control de versión para detectar cambios de otra pestaña.
- Historial de cambios y respaldos SQLite antes de importar o exportar.
- Servidor de vista previa con rutas públicas explícitas y protección contra recorridos de directorios y enlaces simbólicos fuera de la raíz.

## Encabezados y hosting

Los servidores locales devuelven CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Permissions-Policy` y `Referrer-Policy`. El HTML incluye una CSP para el hosting estático. GitHub Pages no aplica los encabezados personalizados del servidor Node: directivas como `frame-ancestors` requieren un encabezado HTTP y no funcionan desde una etiqueta meta. Para control completo de encabezados necesitarías un hosting o proxy que permita configurarlos.

## Qué no pretende hacer

Los nombres de gemas no ocultan ni cifran archivos públicos. Cualquier visitante necesita descargar fotos, nombres y precios para usar el catálogo. La protección consiste en no publicar bases, sesiones o secretos.

Este sistema no maneja tarjetas, contraseñas de clientes, direcciones de envío ni pagos. Rubí es para una computadora administradora; no sustituye la autenticación, permisos por rol, HTTPS y auditoría que requeriría un panel compartido en Internet. Si necesitas varios administradores remotos, debe conectarse a un backend con esos controles.

Se verificaron los controles con pruebas automatizadas funcionales y de rechazo de entradas. Esto no equivale a una auditoría de seguridad externa ni garantiza ausencia de vulnerabilidades.

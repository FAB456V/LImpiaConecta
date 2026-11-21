# Arquitectura

`Navegador → SPA React (Vercel) → HTTPS/JSON → Express (Render) → Prisma → PostgreSQL administrado`.

La SPA conserva el JWT en almacenamiento local para este MVP y lo envía como Bearer; no guarda contraseñas ni datos bancarios. Express valida entrada con Zod, autentica el JWT, aplica rol y propiedad antes del caso de uso. Prisma parametriza consultas y conserva relaciones/únicos. Contraseñas: bcrypt con factor 12. El servidor aplica Helmet, CORS de origen único, límite de 100 KB y rate limiting a autenticación.

Entidades: `User` tiene rol y perfil opcional; un trabajador publica `Service`; `ServiceRequest` enlaza conductor, trabajador y servicio; una solicitud finalizada admite como máximo un `Payment`. La máquina de estados impide saltos inválidos.

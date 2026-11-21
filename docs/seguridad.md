# Seguridad

| Amenaza | Mitigación aplicada |
|---|---|
| Credenciales expuestas | `.env` ignorado, ejemplos ficticios, Gitleaks |
| Robo/falsificación de sesión | JWT firmado, expiración 8 h, secreto ≥32 caracteres, HTTPS en producción |
| Acceso horizontal | comprobación de propietario en servicios, solicitudes y pagos |
| Escalada de privilegios | middleware de rol en cada endpoint sensible |
| Inyección/datos abusivos | Zod, Prisma parametrizado, JSON limitado a 100 KB |
| Fuerza bruta | rate limit en `/api/auth`, bcrypt factor 12 |
| XSS/cross-origin | React escapa texto, Helmet y CORS de origen exacto |
| Dependencias/código vulnerable | npm audit (alto), CodeQL y versiones fijadas por lockfile |
| Doble pago o agenda | restricciones únicas, estados y comprobación de disponibilidad |

Riesgo residual del MVP: el token reside en `localStorage`; una evolución recomendada es cookie HttpOnly/SameSite con protección CSRF. No se procesan pagos reales ni datos bancarios.

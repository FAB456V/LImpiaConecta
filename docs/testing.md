# Pruebas

`backend/src/app.test.ts` ejecuta integración real con Supertest y PostgreSQL: alta/duplicado, login válido/incorrecto, autenticación, rol, perfil, CRUD/desactivación, propiedad, disponibilidad, estados, pago inválido/único, ingresos e historial. `frontend/src/App.test.tsx` comprueba landing y protección del panel.

Comandos: `npm test`, `npm run typecheck`, `npm run build`. El CI crea PostgreSQL, migra y ejecuta todo.

Última ejecución local verificada (20-11-2026): backend **15/15** pruebas y frontend **2/2**, total **17/17**; typecheck y builds de producción exitosos; `npm audit --audit-level=high`: **0 vulnerabilidades**. No se presentan ejecuciones GitHub como verificadas hasta hacer push.

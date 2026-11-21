# Despliegue

Estado: **publicado y verificado el 20-11-2026**.

- Frontend Vercel: https://l-impia-conecta.vercel.app
- API Render: https://limpiaconecta.onrender.com
- Health: https://limpiaconecta.onrender.com/api/health — `200 {"status":"ok"}`

Vercel usa Root Directory `frontend` y `VITE_API_URL=https://limpiaconecta.onrender.com/api`. Render usa Root Directory `backend`, PostgreSQL administrado, migraciones en el start command y `FRONTEND_URL=https://l-impia-conecta.vercel.app`. Ambos proveedores observan `main`; `deploy.yml` verifica frontend y API solamente después de un CI exitoso.

Se comprobaron externamente HTTPS, navegación SPA, CORS, registro, login/JWT y consulta de catálogo. La cuenta ficticia de validación es `verificacion.20261120@limpiaconecta.test`. El plan gratuito de Render puede tardar cerca de un minuto en despertar y su PostgreSQL gratuito expira según las condiciones del proveedor.

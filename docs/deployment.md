# Despliegue

Estado actual: **preparado, no publicado ni verificado**. No hay URLs que declarar todavía.

1. En Render, cree Blueprint desde `render.yaml`, configure `FRONTEND_URL` después de conocer Vercel, desactive Auto-Deploy y copie un Deploy Hook.
2. En Vercel, importe el repo con Root Directory `frontend`, defina `VITE_API_URL=https://<api-render>/api`, desactive Git auto-deploy y cree Deploy Hook de producción.
3. En GitHub Environment `production`, agregue `RENDER_DEPLOY_HOOK` y `VERCEL_DEPLOY_HOOK`.
4. Actualice `FRONTEND_URL` en Render al dominio HTTPS exacto y despliegue otra vez.
5. Verifique `GET https://<api>/api/health`, registro/login, publicación y solicitud desde la URL web. Recién entonces reemplace este estado por URLs y fecha verificadas.

# Pipeline

- `ci.yml`: push a `test` y PR a `main`; PostgreSQL 16, `npm ci`, migración, tipos, build y tests.
- `security.yml`: `main`, `test`, PR y semanal; audit con umbral alto, Gitleaks con historial completo y CodeQL JavaScript/TypeScript.
- `deploy.yml`: escucha un CI exitoso sobre `main`, usa environment `production` y activa un único despliegue por hooks de Render/Vercel. El autodeploy de ambos proveedores debe quedar desactivado para evitar un segundo camino sin gate.

En GitHub configure protección de `main`: PR obligatorio, una aprobación, ramas actualizadas y checks `build-test`, `dependencies-secrets` y `codeql` requeridos.

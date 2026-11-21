# Pipeline

- `ci.yml`: push a `test` y PR a `main`; PostgreSQL 16, `npm ci`, migración, tipos, build y tests.
- `security.yml`: `main`, `test`, PR y semanal; audit con umbral alto, Gitleaks con historial completo y CodeQL JavaScript/TypeScript.
- `deploy.yml`: escucha un CI exitoso sobre `main` y verifica por HTTPS, con reintentos, la salud de Render y el contenido de Vercel. Render y Vercel despliegan automáticamente desde `main`; Actions aporta la evidencia automatizada posterior al CI sin duplicar despliegues mediante hooks.

En GitHub configure protección de `main`: PR obligatorio, una aprobación, ramas actualizadas y checks `build-test`, `dependencies-secrets` y `codeql` requeridos.

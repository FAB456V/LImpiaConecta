# DevSecOps en ocho fases

| Fase | Práctica y control |
|---|---|
| Plan | 12 HU priorizadas, criterios y amenazas documentadas |
| Code | ramas `test`/`main`, PR, revisión, TypeScript estricto, Zod |
| Build | `npm ci`, Prisma generate, typecheck y build reproducible |
| Test | Jest/Supertest con PostgreSQL y Vitest en cada integración |
| Release | PR protegido y artefacto identificado por commit |
| Deploy | solo `main` tras CI exitoso; hooks secretos por environment |
| Operate | health endpoint, migraciones deploy, secretos del proveedor |
| Monitor | logs Render/Vercel, alertas Actions y revisión semanal CodeQL/audit |

No se declara evidencia remota hasta que GitHub y los proveedores muestren ejecuciones verificables.

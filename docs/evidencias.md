# Evidencias de la rúbrica

| Criterio | Evidencia local existente | Captura remota pendiente |
|---|---|---|
| Branching | ramas `main`/`test`, commits descriptivos y PR #1 fusionado | https://github.com/FAB456V/LImpiaConecta/pull/1 |
| CI/CD | CI verde en PR y `main`; verificación deploy corregida en `test` | https://github.com/FAB456V/LImpiaConecta/actions |
| Pruebas | suites Jest/Supertest y Vitest: 17/17 local y en CI | log del job `build-test` |
| Seguridad | Security verde en PR y `main`: audit, CodeQL y Gitleaks | log de jobs `dependencies-secrets` y `codeql` |
| Despliegue | frontend y API verificadas por HTTPS | https://l-impia-conecta.vercel.app y https://limpiaconecta.onrender.com/api/health |

Secuencia de captura: (1) ramas y commits; (2) PR mostrando checks requeridos; (3) detalle de CI; (4) detalle de cada escáner; (5) Vercel y `/api/health`; (6) registro, catálogo, solicitud y pago. No edite capturas ni use URLs inventadas.

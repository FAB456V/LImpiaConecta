# Evidencias de la rúbrica

| Criterio | Evidencia local existente | Captura remota pendiente |
|---|---|---|
| Branching | ramas locales `main` y `test`; commits `503c3a8`, `096b15e`, `6a3a6b5` y `fe06683` sobre `test` | página Branches y PR `test → main` sin fusionar |
| CI/CD | `.github/workflows/ci.yml` y `deploy.yml` | runs verdes con SHA visible |
| Pruebas | suites Jest/Supertest y Vitest | log del job con número de suites/tests |
| Seguridad | `security.yml`, audit, CodeQL, Gitleaks | tres checks verdes y alertas revisadas |
| Despliegue | `render.yaml`, `vercel.json`, guía | navegador con URL, health HTTPS y flujo E2E |

Secuencia de captura: (1) ramas y commits; (2) PR mostrando checks requeridos; (3) detalle de CI; (4) detalle de cada escáner; (5) Vercel y `/api/health`; (6) registro, catálogo, solicitud y pago. No edite capturas ni use URLs inventadas.

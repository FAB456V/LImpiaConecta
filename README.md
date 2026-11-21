# LimpiaConecta

Plataforma web para coordinar limpieza vehicular voluntaria en puntos seguros, fuera del tráfico. Monorepo con React/Vite/TypeScript/Tailwind y API Express/Prisma/PostgreSQL.

## Inicio local

Requisitos: Node 22, npm y PostgreSQL 16 (o Docker).

```bash
cp .env.example .env
docker compose up -d postgres
npm ci
npm run db:migrate -w backend
npm run db:seed -w backend
npm run dev -w backend
npm run dev -w frontend
```

Frontend: `http://localhost:5173`; API: `http://localhost:3000/api`; salud: `/api/health`. Usuarios seed: `trabajador@demo.pe` y `conductor@demo.pe`, contraseña `Demo1234!`; son datos exclusivamente locales.

## Calidad y pruebas

```bash
npm run typecheck
npm run build
npm test
npm audit --audit-level=high
```

La suite backend requiere `limpiaconecta_test` y usa el PostgreSQL Docker local en el puerto 5433; créela y aplique la migración antes de `npm test`. Las variables están en [.env.example](.env.example), sin secretos reales.

## Funcionalidad

Las 12 HU están cubiertas: registro/login y perfil; publicación, búsqueda, edición y desactivación de servicios; solicitudes con disponibilidad y máquina de estados; pago manual único; ingresos por periodo; historial limitado a participantes. Los roles y la propiedad se validan en la API.

## Estructura y despliegue

- `frontend/`: SPA responsive; `VITE_API_URL` apunta a la API.
- `backend/`: REST, JWT, Zod, Prisma y migraciones.
- `.github/workflows/`: CI, CodeQL/audit/Gitleaks y deploy condicionado.
- `docs/`: arquitectura, controles y guía de evidencias.

Producción verificada: [frontend en Vercel](https://l-impia-conecta.vercel.app) y [API en Render](https://limpiaconecta.onrender.com/api/health). Vercel usa `frontend/` y Render `backend/` como Root Directory. Consulte [deployment](docs/deployment.md) y [evidencias](docs/evidencias.md).

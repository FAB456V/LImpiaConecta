import { app } from './app.js';
import { config } from './config.js';
import { prisma } from './db.js';
const server=app.listen(config.PORT,()=>console.log(`API LimpiaConecta en puerto ${config.PORT}`));
const shutdown=()=>server.close(()=>prisma.$disconnect().finally(()=>process.exit(0)));
process.on('SIGTERM',shutdown);process.on('SIGINT',shutdown);

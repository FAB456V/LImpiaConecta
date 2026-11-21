import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma=new PrismaClient();
async function main(){const passwordHash=await bcrypt.hash('Demo1234!',12);const worker=await prisma.user.upsert({where:{email:'trabajador@demo.pe'},update:{},create:{name:'Rosa Quispe',email:'trabajador@demo.pe',passwordHash,role:Role.TRABAJADOR,workerProfile:{create:{bio:'Limpieza responsable en puntos seguros',phone:'999111222'}}}});await prisma.user.upsert({where:{email:'conductor@demo.pe'},update:{},create:{name:'Carlos Soto',email:'conductor@demo.pe',passwordHash,role:Role.CONDUCTOR}});const count=await prisma.service.count({where:{workerId:worker.id}});if(!count)await prisma.service.create({data:{workerId:worker.id,title:'Limpieza exterior express',description:'Lavado exterior sin desperdiciar agua',price:25,zone:'Miraflores',safePoint:'Estacionamiento Larcomar, nivel P2'}})}
main().finally(()=>prisma.$disconnect());

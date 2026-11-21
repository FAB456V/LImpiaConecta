import type { ErrorRequestHandler } from 'express';
import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';
export const errorHandler:ErrorRequestHandler=(error,_req,res,_next)=>{if(error instanceof ZodError)return res.status(400).json({error:'Datos inválidos',details:error.flatten().fieldErrors});if(error instanceof Prisma.PrismaClientKnownRequestError&&error.code==='P2002')return res.status(409).json({error:'El recurso ya existe'});console.error(error instanceof Error?error.message:'Error desconocido');return res.status(500).json({error:'Error interno del servidor'})};

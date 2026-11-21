import type { NextFunction,Request,Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from './config.js';
export type AuthUser={id:string;role:'TRABAJADOR'|'CONDUCTOR';email:string};
declare global{namespace Express{interface Request{user?:AuthUser}}}
export const tokenFor=(user:AuthUser)=>jwt.sign(user,config.JWT_SECRET,{expiresIn:'8h'});
export function authenticate(req:Request,res:Response,next:NextFunction){const raw=req.headers.authorization;if(!raw?.startsWith('Bearer '))return res.status(401).json({error:'Autenticación requerida'});try{req.user=jwt.verify(raw.slice(7),config.JWT_SECRET) as AuthUser;next()}catch{return res.status(401).json({error:'Token inválido o vencido'})}}
export const permit=(role:AuthUser['role'])=>(req:Request,res:Response,next:NextFunction)=>req.user?.role===role?next():res.status(403).json({error:'No autorizado para este rol'});

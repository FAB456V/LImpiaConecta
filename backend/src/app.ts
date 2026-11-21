import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { config } from './config.js';
import { api } from './routes.js';
import { errorHandler } from './errors.js';
export const app=express();
app.disable('x-powered-by');app.use(helmet());app.use(cors({origin:config.FRONTEND_URL,credentials:false}));app.use(express.json({limit:'100kb'}));app.use('/api/auth',rateLimit({windowMs:15*60*1000,limit:50,standardHeaders:'draft-7',legacyHeaders:false}));app.use('/api',api);app.use((_req,res)=>res.status(404).json({error:'Ruta no encontrada'}));app.use(errorHandler);

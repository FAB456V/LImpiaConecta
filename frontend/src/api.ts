import type { User } from './types';
const URL=import.meta.env.VITE_API_URL||'http://localhost:3000/api';
let token=localStorage.getItem('token');
export async function api<T>(path:string,options:RequestInit={}){const response=await fetch(`${URL}${path}`,{...options,headers:{'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`}:{ }),...options.headers}});const body=await response.json().catch(()=>({}));if(!response.ok)throw new Error(body.error||'No se pudo completar la operación');return body as T}
export function saveSession(nextToken:string,user:User){token=nextToken;localStorage.setItem('token',nextToken);localStorage.setItem('user',JSON.stringify(user))}export function clearSession(){token=null;localStorage.removeItem('token');localStorage.removeItem('user')}export function storedUser():User|null{try{return JSON.parse(localStorage.getItem('user')||'null')}catch{return null}}

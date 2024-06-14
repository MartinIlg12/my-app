import { create } from "zustand";
import { User } from "../../../domain/entities/user";
import { AuthStatus } from "../../../infreaestructure/interfaces/auth.status";

//interface estado global
 export interface AuthState{
    status: AuthStatus;
    user?:User;
    token?: string;
    login:(email: string, password: string) => Promise<boolean>
 }
 //Definimos Store cambio y obtencion del estado global
 export const useAuthStore = create()((set, get)=>({

 }));
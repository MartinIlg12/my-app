import { tesloApi } from "../../configs/api/tesloApi";
import { User } from "../../domain/entities/user";
import { AuthResponse } from "../../infreaestructure/interfaces/auth.respons";
//Funcion para tomar token del usuario
const returnUserToken = (data: AuthResponse)=>{
    const user:User = {
        id:data.id,
        email:data.email,
        fullName:data.fullName,
        isActive:data.isActive,
        roles: data.roles
    }
    return{
        user:user,
        token: data.token
    }
}
//acciones http
//accion login
export const authLogin = async (email: string, password: string) =>{
    //email en minuscula
    email=email.toLowerCase();
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/login',{
            email,
            password
        });
        return returnUserToken(data);
    } catch (ex) {
        console.log(ex);
        return null;
    }
}
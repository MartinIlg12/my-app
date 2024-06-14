import { API_URL, API_URL_ANDROID, STAGE } from "@env";
import axios from "axios";
//Definimos la url del api base
export const API_URL_BASE=(STAGE == 'prod' )? API_URL : API_URL_ANDROID
//conexion general
const tesloApi =  axios.create({
    baseURL: API_URL_BASE,
    headers:{
        'Content-Type': 'application/json'
    }
});
//TODO: Interceptors
export{
    tesloApi
}
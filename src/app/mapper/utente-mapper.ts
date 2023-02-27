import { RequestLogin } from "projects/ap-dashboard-lib/src/dto/request/requestLogin";
import { UtenteDto } from "projects/ap-dashboard-lib/src/dto/utenteDto";


export function mapLoginUtente(email:string , password:string): RequestLogin{
    let utente = new UtenteDto();
    let requestLogin = new RequestLogin();
    utente.email = email
    requestLogin.utente = utente
    requestLogin.password = password
    return requestLogin;
}
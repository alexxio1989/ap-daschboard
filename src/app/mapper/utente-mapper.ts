
import { UtenteDto } from "../dto/utenteDto";
import { RequestLogin } from "../dto/request/requestLogin";

export function mapLoginUtente(email:string , password:string): RequestLogin{
    let utente = new UtenteDto();
    let requestLogin = new RequestLogin();
    utente.email = email
    requestLogin.utente = utente
    requestLogin.password = password
    return requestLogin;
}
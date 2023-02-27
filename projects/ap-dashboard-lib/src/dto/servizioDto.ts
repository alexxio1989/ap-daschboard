import { CoreDto } from "./core/coreDto";
import { Dominio } from "./dominio";
import { ImageDto } from "./imageDto";
import { TypeServizio } from "./typeServizio";

export class ServizioDto extends CoreDto{
    type:TypeServizio
    nome:string;
    nomeExt:string;
    descrizione:string;
    dataCreazione:Date;
    enable:boolean;
    prezzo:number;
    tipoServizio:Dominio;
    images: ImageDto[]
}
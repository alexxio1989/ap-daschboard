import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dominio } from '../dto/dominio';
import { AbstractService } from './abstractService';
import { DelegateService } from './delegate.service';
import { IServiceCrud } from './IServiceCrud';
import { UtenteService } from './utente.service';

@Injectable({
  providedIn: 'root'
})
export class TipoServizoService extends AbstractService<Dominio[]> implements IServiceCrud<Dominio,Dominio[]> {

  domini:Dominio[] = []
  sbjObj: Subject<Dominio>;
  
  constructor(
    private http: HttpClient,
    private ds: DelegateService,
    private us: UtenteService
  ) {
    super();
  }

  save(type: Dominio):Observable<Dominio[]>{
    this.ds.sbjSpinner.next(true)
    return this.http.post<Dominio[]>(environment.tpl,type,{headers: super.getHeader()});
  }
  
  delete(id: string): Observable<Dominio[]> {
    throw new Error('Method not implemented.');
  }

  getAll():Observable<Dominio[]>{
    this.ds.sbjSpinner.next(true)
    return this.http.get<Dominio[]>(environment.tpl,{headers: super.getHeader()});
  }

  get(id: string): Observable<Dominio> {
    throw new Error('Method not implemented.');
  }

}

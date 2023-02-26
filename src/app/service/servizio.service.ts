import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants/constants';
import { ResponseServizio } from '../dto/response/responseServizio';
import { ServizioDto } from '../dto/servizioDto';
import { DelegateService } from './delegate.service';
import { UtenteService } from './utente.service';
import { RequestServizio } from '../dto/request/requestServizio';
import { IServiceCrud } from './IServiceCrud';
import { AbstractService } from './abstractService';

@Injectable({
  providedIn: 'root',
})
export class ServizioService extends AbstractService<ServizioDto> implements IServiceCrud<ServizioDto,ResponseServizio>{
  
  public servizio: ServizioDto;
  sbjObj: Subject<ServizioDto> = new Subject();

  constructor(
    private http: HttpClient,
    private ds: DelegateService,
    private us: UtenteService
  ) {
    super();
  }

  save(servizio: ServizioDto): Observable<ResponseServizio> {
    this.ds.sbjSpinner.next(true);
    let req = new RequestServizio();
    req.servizioSelected = servizio
    return this.http.post<ResponseServizio>(
      environment.servizio ,req,{headers: super.getHeader()});
  }

  delete(id: string): Observable<ResponseServizio> {
    this.ds.sbjSpinner.next(true);
    return this.http.delete<ResponseServizio>(
      environment.servizio +"/"+ id ,{headers: super.getHeader()}
    );
  }

  getAll(): Observable<ResponseServizio> {
    this.ds.sbjSpinner.next(true);
    return this.http.get<ResponseServizio>(environment.servizio);
  }

  get(id: string): Observable<ServizioDto> {
    throw new Error('Method not implemented.');
  }

  
}
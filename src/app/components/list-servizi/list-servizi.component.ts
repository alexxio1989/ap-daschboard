import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DominioDto, TypeServizioDto, UtenteService } from '@alexxio1989/ap-fe-core';
import { EventoDto } from '@alexxio1989/ap-fe-core';
import { ImageDto } from '@alexxio1989/ap-fe-core';
import { ProdottoDto } from '@alexxio1989/ap-fe-core';
import { ServizioDto } from '@alexxio1989/ap-fe-core';
import { DelegateService } from '@alexxio1989/ap-fe-core';
import { ServizioService } from '@alexxio1989/ap-fe-core';
import { TipoServizoService } from '@alexxio1989/ap-fe-core';
import { getMapEventi, getMapProdotti } from 'src/app/mapper/common-mapper';

@Component({
  selector: 'app-list-servizi',
  templateUrl: './list-servizi.component.html',
  styleUrls: ['./list-servizi.component.scss']
})
export class ListServiziComponent implements OnInit{

  editorConfig: AngularEditorConfig;
  prodotti:ProdottoDto[] = []
  eventi:EventoDto[] = []

  domini:DominioDto[] = []

  mapProdotti = new Map<String, ProdottoDto[]>();
  mapEventi = new Map<String, EventoDto[]>();

  prodottoSelected : ProdottoDto;
  eventoSelected : EventoDto;

  addProdottoAction : boolean;
  addEventoAction : boolean;


  constructor(public ds: DelegateService,
              private ss:ServizioService , 
              private ts : TipoServizoService ,
              public us: UtenteService) { }


  ngOnInit(): void {
    this.editorConfig = this.ds.editorConfig;
    this.editorConfig.placeholder='Inserisci descrizione estesa prodotto/evento'
    this.domini = this.ts.domini;
    this.ss.getAll().subscribe(next=>{
      this.ds.sbjSpinner.next(false)
      this.prodotti = next.prodotti;
      this.eventi = next.eventi;
      this.mapProdotti = getMapProdotti(this.prodotti)
      this.mapEventi = getMapEventi(this.eventi)
    }, error => {
      this.ds.sbjSpinner.next(false)
      if(401 === error.status){
        this.us.sbjUtente.next(undefined)
      }
      this.ds.sbjErrorsNotification.next("Errore durante il recupero dei servizi")
    })
  }

  add(type:string){
    let listImages : ImageDto[] = []
    let defaultImg = new ImageDto();
    defaultImg.imgUrl = 'default'
    listImages.push(defaultImg)
    
    if('prodotto' === type){
      this.prodottoSelected = new ProdottoDto();
      this.prodottoSelected.images = listImages
      this.addProdottoAction = true;
      this.prodottoSelected.prezzo = 0
      this.ds.editorConfig.placeholder='Inserisci descrizione del prodotto'
    } else {
      this.eventoSelected = new EventoDto();
      this.eventoSelected.images = listImages
      this.ds.editorConfig.placeholder='Inserisci descrizione dell evento'
      this.eventoSelected.prezzo = 0
      this.addEventoAction = true;
    }
  }

  close(type:string){
    this.eventoSelected = new EventoDto();
    this.prodottoSelected = new ProdottoDto();
    this.addProdottoAction = false;
    this.addEventoAction = false;
  }

  edit(type:string , servizio:any){
    if('prodotto' === type){
      this.prodottoSelected = servizio;
      this.addProdottoAction = true;
    } else {
      this.eventoSelected = servizio;
      this.addEventoAction = true;
    }
  }

  save(type:string){
    let servizio:ServizioDto;

    if('prodotto' === type){
      servizio = this.prodottoSelected;
      servizio.type = TypeServizioDto.PRODOTTO
      
    } else {
      servizio = this.eventoSelected;
      servizio.type = TypeServizioDto.EVENTO
    }

    this.ss.save(servizio).subscribe(next=>{
      this.ds.sbjSpinner.next(false)
      this.close('prodotto')
      this.prodotti = next.prodotti;
      this.eventi = next.eventi;
    }, error => {
      this.ds.sbjSpinner.next(false);
      this.ds.sbjErrorsNotification.next(error.error + " , Codice Errore " + error.status);
    })
    
  }


  delete(type:string){
    let servizio:any;
    if('prodotto' === type){
      servizio = this.prodottoSelected;
    } else {
      servizio = this.eventoSelected;
    }

    this.ss.delete(servizio).subscribe(next=>{
      this.ds.sbjSpinner.next(false)
      this.close(type)
      this.prodotti = next.prodotti;
      this.eventi = next.eventi;
    }, error => {
      this.ds.sbjSpinner.next(false);
      this.ds.sbjErrorsNotification.next(error.error + " , Codice Errore " + error.status);
    })
    
  }



}

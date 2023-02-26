import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Dominio } from 'src/app/dto/dominio';
import { EventoDto } from 'src/app/dto/eventoDto';
import { ImageDto } from 'src/app/dto/imageDto';
import { ProdottoDto } from 'src/app/dto/prodottoDto';
import { ServizioDto } from 'src/app/dto/servizioDto';
import { TypeServizio } from 'src/app/dto/typeServizio';
import { getMapEventi, getMapProdotti } from 'src/app/mapper/common-mapper';
import { DelegateService } from 'src/app/service/delegate.service';
import { ServizioService } from 'src/app/service/servizio.service';
import { TipoServizoService } from 'src/app/service/tipo-servizo.service';

@Component({
  selector: 'app-list-servizi',
  templateUrl: './list-servizi.component.html',
  styleUrls: ['./list-servizi.component.scss']
})
export class ListServiziComponent implements OnInit{

  editorConfig: AngularEditorConfig;
  prodotti:ProdottoDto[] = []
  eventi:EventoDto[] = []

  domini:Dominio[] = []

  mapProdotti = new Map<String, ProdottoDto[]>();
  mapEventi = new Map<String, EventoDto[]>();

  prodottoSelected : ProdottoDto;
  eventoSelected : EventoDto;

  addProdottoAction : boolean;
  addEventoAction : boolean;


  constructor(public ds: DelegateService,private ss:ServizioService , private ts : TipoServizoService) { }


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
      servizio.type = TypeServizio.PRODOTTO
      
    } else {
      servizio = this.eventoSelected;
      servizio.type = TypeServizio.EVENTO
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

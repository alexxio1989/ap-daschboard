import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Dominio } from 'src/app/dto/dominio';
import { DelegateService } from 'src/app/service/delegate.service';
import { TipoServizoService } from 'src/app/service/tipo-servizo.service';
import { UtenteService } from 'src/app/service/utente.service';

@Component({
  selector: 'app-list-tipi-servizi',
  templateUrl: './list-tipi-servizi.component.html',
  styleUrls: ['./list-tipi-servizi.component.scss']
})
export class ListTipiServiziComponent implements OnInit {

  editorConfig: AngularEditorConfig;
  domini:Dominio[] = []
  typeSelected: Dominio;
  addAction:boolean

  constructor(
    public us: UtenteService,
    private ds: DelegateService,
    private ts:TipoServizoService
  ) {}

  ngOnInit(): void {
    this.editorConfig = this.ds.editorConfig;
    this.editorConfig.placeholder='Inserisci descrizione estesa del tipo prodotto/evento'
    this.ts.getAll().subscribe(next=>{
      this.ds.sbjSpinner.next(false)
      this.domini = next;
      this.ts.domini = next;
    }, error => {
      this.ds.sbjSpinner.next(false);
      this.ds.sbjErrorsNotification.next(error.error + " , Codice Errore " + error.status);
    })
  }

  add(){
    this.typeSelected = new Dominio();
    this.addAction = true;
  }

  close(){
    this.typeSelected = new Dominio();
    this.addAction = false;
  }

  edit(dominio: Dominio){
    this.typeSelected = dominio;
    this.addAction = true;
  }

  save(){
    this.ts.save(this.typeSelected).subscribe(next=>{
      this.ds.sbjSpinner.next(false)
      this.close()
      this.domini = next;
      this.ts.domini = next;
    }, error => {
      this.ds.sbjSpinner.next(false);
      this.ds.sbjErrorsNotification.next(error.error + " , Codice Errore " + error.status);
    })
  }


  delete(type:Dominio){

  }



}

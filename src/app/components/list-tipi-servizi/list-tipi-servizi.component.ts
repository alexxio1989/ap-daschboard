import { DelegateService, DominioDto, TipoServizoService, UtenteService } from '@alexxio1989/ap-fe-fundamentals-lib';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-list-tipi-servizi',
  templateUrl: './list-tipi-servizi.component.html',
  styleUrls: ['./list-tipi-servizi.component.scss']
})
export class ListTipiServiziComponent implements OnInit {

  editorConfig: AngularEditorConfig;
  domini:DominioDto[] = []
  typeSelected: DominioDto;
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
      if(401 === error.status){
        this.us.sbjUtente.next(undefined)
      }
      this.ds.sbjErrorsNotification.next(error.error + " , Codice Errore " + error.status);
    })
  }

  add(){
    this.typeSelected = new DominioDto();
    this.addAction = true;
  }

  close(){
    this.typeSelected = new DominioDto();
    this.addAction = false;
  }

  edit(dominio: DominioDto){
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


  delete(type:DominioDto){

  }



}

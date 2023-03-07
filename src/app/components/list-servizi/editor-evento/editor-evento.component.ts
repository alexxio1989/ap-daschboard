import { DominioDto, EventoDto, TipoServizoService } from '@alexxio1989/ap-fe-fundamentals-lib';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor-evento',
  templateUrl: './editor-evento.component.html',
  styleUrls: ['./editor-evento.component.scss']
})
export class EditorEventoComponent implements OnInit {

  @Input() evento : EventoDto;
  @Output() eventoEmitter = new EventEmitter<EventoDto>();

  domini:DominioDto[] = []

  constructor(private _formBuilder: FormBuilder,private ts:TipoServizoService) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit(): void {
    this.domini = this.ts.domini
  }

  annulla(){
    this.eventoEmitter.emit(undefined);
  }

  salva(){
    this.eventoEmitter.emit(this.evento);
  }

}

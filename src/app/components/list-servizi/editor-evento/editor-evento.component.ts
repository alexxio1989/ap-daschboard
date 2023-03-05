import { EventoDto } from '@alexxio1989/ap-fe-fundamentals-lib';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor-evento',
  templateUrl: './editor-evento.component.html',
  styleUrls: ['./editor-evento.component.scss']
})
export class EditorEventoComponent implements OnInit {

  @Input() evento : EventoDto;

  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit(): void {
  }

}

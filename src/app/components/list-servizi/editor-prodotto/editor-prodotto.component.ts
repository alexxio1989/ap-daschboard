import { ProdottoDto } from '@alexxio1989/ap-fe-fundamentals-lib';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor-prodotto',
  templateUrl: './editor-prodotto.component.html',
  styleUrls: ['./editor-prodotto.component.scss']
})
export class EditorProdottoComponent implements OnInit {
  @Input() prodotto : ProdottoDto;

  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit(): void {
  }

}

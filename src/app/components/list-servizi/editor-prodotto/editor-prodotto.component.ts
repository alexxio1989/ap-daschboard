import { DominioDto, ImageDto, ProdottoDto, TipoServizoService } from '@alexxio1989/ap-fe-fundamentals-lib';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor-prodotto',
  templateUrl: './editor-prodotto.component.html',
  styleUrls: ['./editor-prodotto.component.scss']
})
export class EditorProdottoComponent implements OnInit {
  @Input() prodotto : ProdottoDto;
  @Output() prodottoEmitter = new EventEmitter<ProdottoDto>();

  domini:DominioDto[] = []

  constructor(private _formBuilder: FormBuilder,private ts:TipoServizoService) {}
  nameFormGroup: FormGroup = this._formBuilder.group({nameCtrl: ['']});
  typeFormGroup: FormGroup = this._formBuilder.group({typeCtrl: ['']});
  priceFormGroup: FormGroup = this._formBuilder.group({priceCtrl: ['']});

  ngOnInit(): void {
    this.domini = this.ts.domini
  }

  onChangeTypeProdotto(event:any){
    this.typeFormGroup.setValue(event)
  }

  retrieveImages(images: ImageDto[]){
    this.prodotto.images = images;
  }
  
  annulla(){
    this.prodottoEmitter.emit(undefined);
  }

  salva(){
    this.prodottoEmitter.emit(this.prodotto);
  }
}

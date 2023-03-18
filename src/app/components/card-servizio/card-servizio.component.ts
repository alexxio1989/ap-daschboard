import { EventoDto, ProdottoDto, ServizioDto } from '@alexxio1989/ap-fe-fundamentals-lib';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-servizio',
  templateUrl: './card-servizio.component.html',
  styleUrls: ['./card-servizio.component.scss']
})
export class CardServizioComponent implements OnInit {

  @Input() prodotto: ProdottoDto;
  @Input() evento: EventoDto;
  servizio : any;

  constructor() { }

  ngOnInit(): void {
    if(this.prodotto){
      this.servizio = this.prodotto;
    } else {
      this.servizio = this.evento;
    }
  }

}

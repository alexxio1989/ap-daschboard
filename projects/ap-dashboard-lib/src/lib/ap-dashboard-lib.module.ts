import { NgModule } from '@angular/core';
import { DelegateService, ServizioService, TipoServizoService, UtenteService } from '../public-api';



@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers:[
    ServizioService,
    UtenteService,
    TipoServizoService,
    DelegateService
  ]
})
export class ApDashboardLibModule { }

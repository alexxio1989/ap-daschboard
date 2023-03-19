import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { DialogLoginComponent } from './dialog/dialog-login/dialog-login.component';
import { DialogServizioComponent } from './dialog/dialog-servizio/dialog-servizio.component';
import { DialogTipoServizioComponent } from './dialog/dialog-tipo-servizio/dialog-tipo-servizio.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTipiServiziComponent } from './components/list-tipi-servizi/list-tipi-servizi.component';
import { ListServiziComponent } from './components/list-servizi/list-servizi.component';
import { environment } from 'src/environments/environment';
import { ApFeFundamentalsLibModule } from '@alexxio1989/ap-fe-fundamentals-lib';
import { EditorEventoComponent } from './components/list-servizi/editor-evento/editor-evento.component';
import { EditorProdottoComponent } from './components/list-servizi/editor-prodotto/editor-prodotto.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { CurrencyMaskConfig, CurrencyMaskModule } from "ng2-currency-mask";

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R€ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DialogLoginComponent,
    DialogServizioComponent,
    DialogTipoServizioComponent,
    ListTipiServiziComponent,
    ListServiziComponent,
    EditorEventoComponent,
    EditorProdottoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatTabsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatFormFieldModule,
    AngularEditorModule,
    MatInputModule,
    MatMenuModule,
    ApFeFundamentalsLibModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    CurrencyMaskModule
  ],
  providers: [{provide: 'environment', useValue: environment}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
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
import { ImagesEditorComponent } from './images-editor/images-editor.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DialogLoginComponent,
    DialogServizioComponent,
    DialogTipoServizioComponent,
    ListTipiServiziComponent,
    ListServiziComponent,
    ImagesEditorComponent
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
    ImageCropperModule
  ],
  providers: [{provide: 'environment', useValue: environment}],
  bootstrap: [AppComponent]
})
export class AppModule { }

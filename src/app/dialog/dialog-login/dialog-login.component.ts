import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestLogin } from 'projects/ap-dashboard-lib/src/dto/request/requestLogin';
import { UtenteDto } from 'projects/ap-dashboard-lib/src/dto/utenteDto';
import { DelegateService, UtenteService } from 'projects/ap-dashboard-lib/src/public-api';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLoginComponent implements OnInit {

  login = true
  requestLogin:RequestLogin
  utente:UtenteDto

  get enableLogin():boolean {
    return this.requestLogin.password !== undefined &&
     this.requestLogin.password !== null &&
      '' !== this.requestLogin.password &&
       this.utente.email !== undefined &&
       this.utente.email !== null
  }

  constructor(private user_service:UtenteService,
    private ds:DelegateService , 
    private dialogRef: MatDialogRef<DialogLoginComponent>,
    private route: Router) { 
      
    }

  ngOnInit(): void {
    this.login = true
    this.requestLogin = new RequestLogin();
    this.utente = new UtenteDto();
  }

  loginUser(){
    this.requestLogin.utente = this.utente;
    this.user_service.loginAdmin(this.requestLogin).subscribe(next => {
      this.ds.sbjSpinner.next(false)
      this.ds.sbjErrorsNotification.next("Login avvenuta con successo")
      this.user_service.sbjUtente.next(next.utente)
      this.dialogRef.close();
    }, error => {
      this.ds.sbjSpinner.next(false);
      this.ds.sbjErrorsNotification.next(error.error + " , Codice Errore " + error.status);
    })
  }

  cancel(){
    this.route.navigate(['']);
  }

}

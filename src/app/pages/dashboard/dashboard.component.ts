import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DelegateService } from 'projects/ap-dashboard-lib/src/service/delegate.service';
import { UtenteService } from 'projects/ap-dashboard-lib/src/service/utente.service';
import { DialogLoginComponent } from 'src/app/dialog/dialog-login/dialog-login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loaded = false;

  constructor(
    public us: UtenteService,
    public dialog: MatDialog,
    private route: Router,
    private ds: DelegateService
  ) {}

  ngOnInit(): void {
    if (!this.us.logged) {
      this.loaded = false
      this.openLogin();
    } else {
      this.us.isSU;
      if (!this.us.isSU) {
        this.route.navigate(['']);
      } else {
        this.loaded = true
      }
    }

    this.us.sbjUtente.asObservable().subscribe(next=>{
      if(next){
        this.loaded = true
      }
    });

  }

  openLogin() {
    if (this.ds.isMobile) {
      this.dialog.open(DialogLoginComponent, {
        height: 'auto',
        width: '95%',
        maxWidth: '95vw',
      });
    } else {
      this.dialog.open(DialogLoginComponent, {
        height: 'auto',
        width: '40%',
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DelegateService, UtenteService } from '@alexxio1989/ap-fe-fundamentals-lib';
import { DialogLoginComponent } from 'src/app/dialog/dialog-login/dialog-login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loaded = false;
  activeTab = 0;

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
        if(localStorage.getItem('ACTIVE_TAB_ADMIN')){
          this.activeTab = parseInt(localStorage.getItem('ACTIVE_TAB_ADMIN'))
        }
        this.loaded = true
      }
    }

    this.us.sbjUtente.asObservable().subscribe(next=>{
      if(next){
        this.loaded = true
      } else {
        this.loaded = false
        this.openLogin();
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

  tabChanged(tab:any){
    this.activeTab = tab.index
    console.log(this.activeTab)
    localStorage.removeItem('ACTIVE_TAB_ADMIN')
    localStorage.setItem('ACTIVE_TAB_ADMIN',''+this.activeTab)
  }

}

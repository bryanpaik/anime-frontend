import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FireBaseService } from 'src/app/utils/services/fire-base.service';
// import { CreateAccountComponent } from '../create-account/create-account.component';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'topbar-nav',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  // loggedIn: boolean = false;

  constructor(public dialog: MatDialog, public fireBase: FireBaseService) { }

  ngOnInit(): void {
  }

  // login(): void {
  //   const login = this.dialog.open(LoginComponent);
  //   login.afterClosed().subscribe(result => {
  //     this.fireBase.getCredentials().then(res => {
  //       if(res) {
  //         this.loggedIn = true;
  //       }
  //     });
  //   });

  // }

  // logout() {
  //   this.loggedIn = false;
  //   this.fireBase.logout();
  // }

  // createAccount(): void {
  //   const account = this.dialog.open(CreateAccountComponent);
  //   account.afterClosed().subscribe(result => {
  //     this.fireBase.getCredentials().then(res => {
  //       if(res) {
  //         this.loggedIn = true;
  //       }
  //     });
  //   });
  // }

}

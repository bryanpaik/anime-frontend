import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FireBaseService } from 'src/app/utils/services/fire-base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginValid: boolean = true;
  username: string;
  password: string;
  constructor(public dialogRef: MatDialogRef<LoginComponent>, public firebase: FireBaseService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!(new RegExp('.*@.*\.com').test(this.username))) {
      this.loginValid = true;
    }
    else {
      this.firebase.signIn(this.username, this.password);
      this.firebase.getCredentials().then(res => {
        if (res) {
          this.dialogRef.close();
        }
      })

    }

  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FireBaseService } from 'src/app/utils/services/fire-base.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  invalidEmail: boolean = false;
  passwordMismatch: boolean = false;
  username: string;
  password: string;
  confirmPassword: string;

  constructor(public dialogRef: MatDialogRef<CreateAccountComponent>, public firebase: FireBaseService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!(new RegExp('.*@.*\.com').test(this.username))) {
      this.invalidEmail = true;
    }
    else if(this.confirmPassword !== this.password) {
      this.passwordMismatch = true;
    }
    else {
      this.firebase.createAccount(this.username, this.password);
      this.firebase.getCredentials().then(res => {
        if (res) {
          this.dialogRef.close();
        }
      })
      this.dialogRef.close();
    }
  }

}

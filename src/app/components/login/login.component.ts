import { Component, OnInit } from '@angular/core';
import {isUndefined} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public userpass: string;
  public communicat: string;
  login() {
      if (!isUndefined(this.username) && !isUndefined(this.userpass)) {
        this.communicat = this.username + '_' + this.userpass;
      } else {
        this.communicat = 'Login or password is empty!';
      }
  }

  constructor() { }

  ngOnInit() {
  }


}

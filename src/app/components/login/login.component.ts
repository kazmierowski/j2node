import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public useremail: string;
  public userpass: string;
  public communicat: string;
  constructor(private loginService: LoginService, private router: Router) {}
  public login() {
      this.loginService.login(this.useremail, this.userpass).subscribe(
        (res) => {
            if (res !== false) {
                this.router.navigate(['/board']);
            }
        }
      );
  }

  ngOnInit() {
  }


}

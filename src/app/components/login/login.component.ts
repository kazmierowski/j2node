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
  public username: string;
  public userpass: string;
  public communicat: string;
  constructor(private loginService: LoginService, private router: Router) {}
  public login() {
      this.loginService.login(this.username, this.userpass).subscribe(
        (res) => {
            console.log(res);
            if (res === true) {
                this.router.navigate(['/board']);
            }
        }
      );
  }

  ngOnInit() {
  }


}

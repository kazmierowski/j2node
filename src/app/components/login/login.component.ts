import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';

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
  constructor(private loginService: LoginService) {}
  public login() {
      console.log(this.username + '_' + this.userpass);
      this.loginService.login(this.username, this.userpass).subscribe(
        (res) => {
            const temp = res[0].answer;
            console.log(temp);
            if (temp == 1) {
                localStorage.setItem('zalogowany', 'true');
            }
        }
      );
  }

  ngOnInit() {
  }


}

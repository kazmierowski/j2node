import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
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

    constructor(private loginService: LoginService, private router: Router) {
    }

    public login() {

        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (this.useremail != "" && (this.useremail.length <= 5 || !EMAIL_REGEXP.test(this.useremail))) {
            this.communicat = 'Incorrect email format!';
        } else if (this.useremail === undefined || this.userpass === undefined || this.useremail == '' || this.userpass == '') {
            this.communicat = 'Fill both fields!';
        } else {
            this.loginService.login(this.useremail, this.userpass).subscribe(
                (res) => {
                    if (res !== false) {
                        this.router.navigate(['/board']);
                    } else {
                        this.communicat = 'Incorrect password or login!';
                    }
                }
            );
        }
    }

    ngOnInit() {
    }
}

import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User.model';
import {GlobalVariableService} from '../../services/global-data.service';

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

    constructor(private loginService: LoginService, private router: Router, private globalVariable: GlobalVariableService, private route: ActivatedRoute,) {
    }

    public login() {

        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (this.useremail != '' && (this.useremail.length <= 5 || !EMAIL_REGEXP.test(this.useremail))) {
            this.communicat = 'Incorrect email format!';
        } else if (this.useremail === undefined || this.userpass === undefined || this.useremail == '' || this.userpass == '') {
            this.communicat = 'Fill both fields!';
        } else {
            this.loginService.login(this.useremail, this.userpass).subscribe(
                (res) => {
                    if (res !== false) {
                        this.router.navigateByUrl(localStorage.getItem('lastUrl') || '/user-dashboard');
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

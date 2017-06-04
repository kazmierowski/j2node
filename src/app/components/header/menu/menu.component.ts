import {Component, OnInit} from '@angular/core';
import {MenuService} from './menu.service';
import {CookieService} from "ng2-cookies";
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [MenuService]
})
export class MenuComponent implements OnInit {

    public menuFields;

    public session;

    constructor(private service: MenuService,
                private cookieService: CookieService,
                private loginService: LoginService,
                private router: Router) {
    }

    ngOnInit() {
        this.menuFields = [];
        this.service.getMenuFields().subscribe(
            res => {
                for (const field in res) {
                    if (res.hasOwnProperty(field)) {
                        this.menuFields.push(res[field]);
                    }
                }
            }
        );
        this.router.events.subscribe(() => {
            this.session = this.cookieService.get('session');
        })
    }

    public logout() {
        this.loginService.logout();
    }

    public login() {
        this.router.navigate(['/login']);
    }

}

import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {CookieService} from "ng2-cookies";
import {Router} from "@angular/router";

@Injectable()
export class LoginService {
    loginURL = '/user/auth';

    constructor(private http: Http, private cookieService: CookieService, private router: Router) {
    }

    public login(useremail: string, userpass: string) {
        const user = {pass: '', email: ''};
        user.pass = userpass;
        user.email = useremail;
        const headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        const options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post(this.loginURL, user, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    public logout() {
        this.cookieService.delete('session');
        this.router.navigate(['/j2node']);
    }

    public getLogin(useremail: string, password: string) {
        return this.http.get('/auth/login?username=' + useremail + '&userpass=' + password)
            .map((res: Response) => res.json());
    }
}

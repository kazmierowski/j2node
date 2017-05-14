import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {
    loginURL = '/user/auth';

    constructor(private http: Http) {
    }

    public login(username: string, userpass: string) {
        const user = {pass: '', name: ''};
        user.pass = userpass;
        user.name = username;
        const headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        const options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post(this.loginURL, user, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    public getLogin(username: string, password: string) {
        return this.http.get('/auth/login?username=' + username + '&userpass=' + password)
            .map((res: Response) => res.json());
    }
}

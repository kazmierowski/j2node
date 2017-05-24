import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {GlobalVariableService} from "../../global-variable.service";

@Injectable()
export class LoginService {

    constructor(private http: Http, private globalVariables: GlobalVariableService) {
    }

    loginURL = this.globalVariables.getServerDomain() + '/user/auth';

    public login(useremail: string, userpass: string) {
        const user = {pass: '', email: ''};
        user.pass = userpass;
        user.email = useremail;
        const headers = new Headers();// ... Set content type to JSON
        headers.append('Content-Type', 'application/json');
        headers.append('withCredentials', 'true');
        // headers.append('set-cookie', 'true');
        const options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post(this.loginURL, user, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    public getLogin(useremail: string, password: string) {
        return this.http.get('/auth/login?username=' + useremail + '&userpass=' + password)
            .map((res: Response) => res.json());
    }
}

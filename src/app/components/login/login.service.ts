import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}
    public getLogin(username: string, password: string) {
        console.log('login w LoginService');
        return this.http.get('/auth/login?username=' + username + '+userpass=' + password)
            .map((res: Response) => res.json()
               );
    }
}

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";

@Injectable()
export class MenuService {

  private menuFieldsUrl = './test/menu.json';

  constructor(private http: Http, private loginService: LoginService, private router: Router) { }

  public getMenuFields() {
    return this.http.get(this.menuFieldsUrl)
        .map((res: Response) => res.json());
  }
}

import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

  private menuFieldsUrl: string = './test/menu.json';

  constructor(private http: Http) { }

  public getMenuFields() {
    return this.http.get(this.menuFieldsUrl)
        .map((res: Response) => res.json());
  }

}

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BoardColumnService {

  private columnInfoUrl = './test/board/colums-test-settings.json';

  constructor(private http: Http) {
  }

  public getColumnInfo() {
    return this.http.get(this.columnInfoUrl)
        .map((res: Response) => res.json());
  }
}

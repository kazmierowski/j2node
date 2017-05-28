import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BoardService {

  constructor(private http: Http) { }

  public getBoardFrontend(boardId: number) {
    return this.http.get('board/getFrontend/' + boardId)
        .map((res: Response) => res.json())
  }

}

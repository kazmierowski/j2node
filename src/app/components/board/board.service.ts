import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalVariableService} from "../../global-variable.service";

@Injectable()
export class BoardService {

  constructor(private http: Http, private globalVariables: GlobalVariableService) { }

  public getBoardFrontend(boardId: number) {
    return this.http.get('board/getFrontendData/' + boardId)
        .map((res: Response) => res.json())
        .do((res) => {

            let statuses = [];

            for(let id of res.statuses) {
                statuses.push(id.statusId);
            }
            this.globalVariables.getGlobalUserBoards()[boardId]
                .setStatusesList(statuses);
        })
  }
}

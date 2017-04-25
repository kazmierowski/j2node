import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class BoardTicketService {

  private ticketsForColumnUrl: string = './test/board/tickets-test.json';

  constructor(private http: Http) { }

  public getTicketsForColumn(columnName: string) {
    return this.http.get(this.ticketsForColumnUrl)
        .map((res: Response) => res.json());
  }

  public getTicketsForBoard(boardName: string) {
    return this.http.get(this.ticketsForColumnUrl)
        .map((res: Response) => res.json());
  }
}

import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {serverBaseUrl} from '../../../app.variables';
import {Ticket} from "../../../models/Ticket.model";

@Injectable()
export class BoardTicketService {

  private allTicketsUrl: string = 'ticket/allTickets';
  private addTicketUrl: string = 'ticket/addTicket';

  constructor(private http: Http) { }

    public getAllTickets(columnName: string) {
      return this.http.get(this.allTicketsUrl)
          .map((res: Response) =>  res.json());
    }

    public setTicket(ticket: Ticket) {
      return this.http.get(this.addTicketUrl)
        .map((res: Response) =>  res.json());
    }

  // public getTicketsForColumn(columnName: string) {
  //   return this.http.get(this.ticketsForColumnUrl)
  //       .map((res: Response) => res.json());
  // }

  // public getTicketsForBoard(boardName: string) {
  //   return this.http.get(this.ticketsForColumnUrl)
  //       .map((res: Response) => res.json());
  // }
}

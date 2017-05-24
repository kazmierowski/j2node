import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Ticket} from "../../../models/Ticket.model";
import {GlobalVariableService} from "../../../global-variable.service";

@Injectable()
export class BoardTicketService {

  constructor(private http: Http, private globalVariables: GlobalVariableService) { }

  private allTicketsUrl: string = this.globalVariables.getServerDomain() + '/ticket/allTickets';
  private addTicketUrl: string = 'ticket/addTicket';

    public getAllTickets(columnName: string) {
      let header = new Headers({'withCredentials': 'true'});
      return this.http.get(this.allTicketsUrl, header)
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

import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Ticket} from "../../../models/Ticket.model";

@Injectable()
export class CreateTicketService {

  private ticket = new Subject<object>();

  ticketObservable = this.ticket.asObservable();

  constructor() { }

  getTicketSubject() {
    return this.ticket.asObservable();
  }

  saveTicket(ticketParams) {
    let ticket = ticketParams;

    this.ticket.next(ticket);
  }


}

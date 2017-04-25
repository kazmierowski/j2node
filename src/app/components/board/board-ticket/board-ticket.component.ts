import {Component, Input, OnInit} from '@angular/core';
import {BoardTicketService} from "./board-ticket.service";
import {Ticket} from "../../../models/Ticket.model";

@Component({
  selector: 'app-board-ticket',
  templateUrl: './board-ticket.component.html',
  styleUrls: ['./board-ticket.component.scss'],
  providers: [BoardTicketService]
})
export class BoardTicketComponent implements OnInit {

  @Input('ticket') ticket: Ticket;

  constructor() { }

  ngOnInit() {
    console.log(this.ticket);
  }

}

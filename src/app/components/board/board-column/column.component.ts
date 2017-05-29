import {Component, Input, OnInit} from '@angular/core';
import {BoardTicketService} from '../board-ticket/board-ticket.service';
import {Column} from '../../../models/Column.model';
import {Ticket} from '../../../models/Ticket.model';
import {GlobalVariableService} from '../../../global-variable.service';
import {TicketFilters} from '../../../../helpers/ticket.helper';
import {ActivatedRoute} from '@angular/router';
import {TicketStatus} from '../../../models/TicketStatus.model';

@Component({
  selector: 'app-board-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  providers: [BoardTicketService, TicketFilters]
})
export class BoardColumnComponent implements OnInit {

  @Input('column') column: TicketStatus;

  public tickets = {};

  constructor(
      private globalVariables: GlobalVariableService,
      private ticketHelper: TicketFilters,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tickets = this.ticketHelper.filterTicketsSetByStatus(
          this.globalVariables.getGlobalUserProjects()[params.projectId].getTickets(),
          this.column.getId());
    });
  }

}

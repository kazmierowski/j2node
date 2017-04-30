import {Component, Input, OnInit} from '@angular/core';
import {BoardTicketService} from '../board-ticket/board-ticket.service';
import {Column} from '../../../models/Column.model';
import {Ticket} from '../../../models/Ticket.model';

@Component({
  selector: 'app-board-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  providers: [BoardTicketService]
})
export class BoardColumnComponent implements OnInit {

  @Input('column') column: Column;

  public ticketsList = [];

  constructor(private ticketService: BoardTicketService) { }

  ngOnInit() {
    this.ticketService.getAllTickets(this.column['name']).subscribe(
        res => {
          for (const ticket in res) {
            if (res.hasOwnProperty(ticket)) {
              const obj = res[ticket];

              if(obj['ticket_status'] == this.column.getStatus()){
                this.ticketsList.push(
                    new Ticket(
                        obj['ticket_id'],
                        obj['ticket_type'],
                        obj['ticket_title'],
                        obj['ticket_inProjectId'],
                        obj['ticket_createDate'],
                        obj['ticket_lastModificationDate'],
                        obj['ticket_description'],
                        obj['ticket_points'],
                        obj['ticket_assignee'],
                        obj['ticket_reporter'],
                        obj['ticket_watchers'],
                        obj['ticket_priority'],
                        obj['ticket_label'],
                        obj['ticket_environment'],
                        obj['ticket_sprintName'],
                        obj['ticket_status'],
                        obj['ticket_attachments'],
                        obj['ticket_comments'],
                        obj['ticket_workLog'],
                        obj['ticket_history'],
                    )
                );
              }
            }
          }
        }
    );
  }

}

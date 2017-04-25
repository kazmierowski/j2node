import {Component, Input, OnInit} from '@angular/core';
import {BoardTicketService} from "../board-ticket/board-ticket.service";
import {Column} from "../../../models/Column.model";
import {Ticket} from "../../../models/Ticket.model";

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
    this.ticketService.getTicketsForColumn(this.column['name']).subscribe(
        res => {
          for(let ticket in res) {
            if(res.hasOwnProperty(ticket)) {
              let obj = res[ticket];

              this.ticketsList.push(
                  new Ticket(
                      obj['id'],
                      obj['type'],
                      obj['title'],
                      obj['createDate'],
                      obj['lastModficationDate'],
                      obj['description'],
                      obj['points'],
                      obj['assignee'],
                      obj['reporter'],
                      obj['watchers'],
                      obj['priority'],
                      obj['label'],
                      obj['environment'],
                      obj['sprintName'],
                      obj['status'],
                      obj['attachments'],
                      obj['comments'],
                      obj['workLog'],
                      obj['history'],
                  )
              )

            }
          }
        }
    )
  }

}

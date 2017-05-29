import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalVariableService} from '../../../global-variable.service';
import {Ticket} from '../../../models/Ticket.model';
import {TicketStatus} from '../../../models/TicketStatus.model';

@Injectable()
export class ProjectDashboardService {

    constructor(private http: Http, private globalVariables: GlobalVariableService) {
    }

    public getFullProjectFrontend(projectId: number) {
        return this.http.get('project/getFullFrontend/' + projectId)
            .map((res: Response) => res.json())
            .do((res) => {

                const table = [];
                const tickets = {};
                const statuses = {};

                for (const id of res.boardsId) {
                    table.push(id.boardId);
                }
                this.globalVariables.getGlobalUserProjects()[projectId]
                    .setBoardsList(table);

                for (const ticket of res.tickets) {
                    tickets[ticket.ticket_id] = new Ticket(
                        ticket['ticket_id'],
                        ticket['ticket_type'],
                        ticket['ticket_title'],
                        ticket['ticket_inProjectId'],
                        ticket['ticket_createDate'],
                        ticket['ticket_lastModificationDate'],
                        ticket['ticket_description'],
                        ticket['ticket_points'],
                        ticket['ticket_assignee'],
                        ticket['ticket_reporter'],
                        ticket['ticket_watchers'],
                        ticket['ticket_priority'],
                        ticket['ticket_label'],
                        ticket['ticket_environment'],
                        ticket['ticket_sprintName'],
                        ticket['ticket_status'],
                        ticket['ticket_attachments'],
                        ticket['ticket_comments'],
                        ticket['ticket_workLog'],
                        ticket['ticket_history']
                    );
                }
                this.globalVariables.getGlobalUserProjects()[projectId]
                    .setTickets(tickets);

                for (const status of res.statuses) {
                    statuses[status.ticketStatus_id] = new TicketStatus(
                        status['ticketStatus_id'],
                        status['ticketStatus_name'],
                        status['ticketStatus_alias']
                    );
                }
                this.globalVariables.getGlobalUserProjects()[projectId]
                    .setStatuses(statuses);
            });
    }
}

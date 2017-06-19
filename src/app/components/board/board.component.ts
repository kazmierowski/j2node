import {Component, ElementRef, OnInit} from '@angular/core';
import {BoardColumnService} from './board-column/board-column.service';
import {Column} from '../../models/Column.model';
import {GlobalVariableService} from '../../services/global-variable.service';
import {ActivatedRoute} from '@angular/router';
import {Board} from '../../models/Board.model';
import {Project} from '../../models/Project.model';
import {FilterByKey} from '../../helpers/filters.helper';
import {DialogService} from "../../services/dialog.service";
import {CreateTicketComponent} from "../create/create-ticket/create-ticket.component";
import {LeftMenuService} from "../left-menu/left-menu.service";
import {CreateTicketService} from "../create/create-ticket/create-ticket.service";
import {MdDialogConfig} from "@angular/material";

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    providers: [BoardColumnService, FilterByKey, DialogService, LeftMenuService, CreateTicketService]
})
export class BoardComponent implements OnInit {

    public board: Board;
    public project: Project;
    public ticketTypes = {};
    public columns = {};
    public columnCount: number;

    private dialog;
    private createDialogActive = false;

    constructor(private globalVariables: GlobalVariableService,
                private route: ActivatedRoute,
                private filterByKey: FilterByKey,
                private dialogService: DialogService,
                private leftMenuService: LeftMenuService,
                private createTicketService: CreateTicketService) {
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.board = this.globalVariables.getGlobalUserBoards()[params.boardId];
            this.project = this.globalVariables.getGlobalUserProjects()[params.projectId];
            this.columns = this.filterByKey.object(
                this.project.getStatuses(),
                this.board.getStatusesList()
            );
            this.columnCount = Object.keys(this.columns).length;

            this.createTicketService.ticketObservable.subscribe(
                ticket => {
                    this.saveTicket(ticket);
                }
            )
        });
    }

    createTicket() {

        if(this.createDialogActive === false) {
            this.createDialogActive = true;
            this.dialog = this.dialogService.open(CreateTicketComponent,
                {
                    height: '800px',
                    width: '700px',
                    disableClose: true
                });
            this.dialog.componentInstance.service = this.createTicketService; //not the best solution ...
            this.dialog.componentInstance.ticketTypes = this.project.getTicketTypes();
            this.dialog.componentInstance.userProjects = this.globalVariables.getGlobalUserProjects();
            this.dialog.afterClosed().subscribe(
                () => {
                    this.createDialogActive = false
                }
            )
        }
    }

    saveTicket(ticket) {
        console.log('ticket saved');
        this.dialog.close();
        this.dialog = undefined;
    }
}

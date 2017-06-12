import {Component, OnInit} from '@angular/core';
import {BoardColumnService} from './board-column/board-column.service';
import {Column} from '../../models/Column.model';
import {GlobalVariableService} from '../../services/global-variable.service';
import {ActivatedRoute} from '@angular/router';
import {Board} from '../../models/Board.model';
import {Project} from '../../models/Project.model';
import {FilterByKey} from '../../helpers/filters.helper';
import {DialogService} from "../../services/dialog.service";
import {CreateTicketComponent} from "../create/create-ticket/create-ticket.component";

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    providers: [BoardColumnService, FilterByKey, DialogService]
})
export class BoardComponent implements OnInit {

    public board: Board;
    public project: Project;
    public columns = {};
    public columnCount: number;
    private dialog;

    constructor(private globalVariables: GlobalVariableService,
                private route: ActivatedRoute,
                private filterByKey: FilterByKey,
                private dialogService: DialogService) {
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
        });
    }

    createTicket() {
        this.dialog = this.dialogService.open(CreateTicketComponent, {height: '800px', width: '700px'});
        this.dialog.componentInstance.userProjects = this.globalVariables.getGlobalUserProjects();
    }

}

import {Component, OnInit} from '@angular/core';
import {BoardColumnService} from './board-column/board-column.service';
import {Column} from '../../models/Column.model';
import {GlobalVariableService} from '../../global-variable.service';
import {ActivatedRoute} from '@angular/router';
import {Board} from '../../models/Board.model';
import {Project} from '../../models/Project.model';
import {FilterByKey} from '../../../helpers/filters.helper';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    providers: [BoardColumnService, FilterByKey]
})
export class BoardComponent implements OnInit {

    public board: Board;
    public project: Project;
    public columns = {};
    public columnCount: number;

    constructor(private columnService: BoardColumnService,
                private globalVariables: GlobalVariableService,
                private route: ActivatedRoute,
                private filterByKey: FilterByKey) {
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

}

import {Component, OnInit} from '@angular/core';
import {ProjectDashboardService} from './project-dashboard.service';
import {ActivatedRoute} from '@angular/router';
import {GlobalVariableService} from '../../../global-variable.service';
import {FilterByKey} from '../../../helpers/filters.helper';

@Component({
    selector: 'app-project-dashboard',
    templateUrl: './project-dashboard.component.html',
    styleUrls: ['./project-dashboard.component.scss'],
    providers: [ProjectDashboardService, FilterByKey]
})
export class ProjectDashboardComponent implements OnInit {



    constructor(private route: ActivatedRoute, private globalVariables: GlobalVariableService, private filterByKey: FilterByKey) {
    }

    public project;
    public boards;
    public overallChartData;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.project = this.globalVariables.getGlobalUserProjects()[params.projectId];
            this.boards = this.filterByKey.object(
                this.globalVariables.getGlobalUserBoards(),
                this.globalVariables.getGlobalUserProjects()[params.projectId].getBoardsList()
            );
            console.log(this.globalVariables.getGlobalUserProjects()[params.projectId]);
        });
        this.overallChartData = [
            {
                "name": "In progress",
                "value": 50
            },
            {
                "name": "Bugs",
                "value": 10
            },
            {
                "name": "Done",
                "value": 20
            }
        ];
    }
}

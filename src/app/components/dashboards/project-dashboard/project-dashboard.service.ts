import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalVariableService} from "../../../global-variable.service";

@Injectable()
export class ProjectDashboardService {

    constructor(private http: Http, private globalVariables: GlobalVariableService) {
    }

    public getFullProjectFrontend(projectId: number) {
        return this.http.get('project/getFullFrontend/' + projectId)
            .map((res: Response) => res.json())
            .do((res) => {

                let table = [];
                for (let id of res.boardsId) {
                    table.push(id.boardId);
                }
                this.globalVariables.getGlobalUserProjects()[projectId]
                    .setBoardsList(table);
            })
    }
}

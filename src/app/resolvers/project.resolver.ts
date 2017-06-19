import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/Project.model';
import {ProjectDashboardService} from '../components/dashboards/project-dashboard/project-dashboard.service';
import {GlobalVariableService} from "../services/global-variable.service";

@Injectable()
export class ProjectResolver implements Resolve<Project> {
    constructor(private projectDashboardService: ProjectDashboardService, private globalVariables: GlobalVariableService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        if(this.globalVariables.getGlobalUserProjects()[route.paramMap.get('projectId')]
                .getFullFetch() === false) {
            return this.projectDashboardService.getFullProjectFrontend(+route.paramMap.get('projectId'));
        }
    }
}

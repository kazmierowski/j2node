import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/Project.model';
import {ProjectDashboardService} from '../components/dashboards/project-dashboard/project-dashboard.service';

@Injectable()
export class ProjectResolver implements Resolve<Project> {
    constructor(private projectDashboardService: ProjectDashboardService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.projectDashboardService.getFullProjectFrontend(+route.paramMap.get('projectId'));
    }
}

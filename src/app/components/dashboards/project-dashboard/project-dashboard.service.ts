import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectDashboardService {

  constructor(private http: Http) { }

  public getProjectFrontend(projectId: number) {
    return this.http.get('project/getFrontend/' + projectId)
        .map((res: Response) => res.json())
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {GlobalVariableService} from "../global-variable.service";
import {isNumber} from "util";
import {Project} from "../models/Project.model";

@Injectable()
export class ProjectResolver implements Resolve<Project> {
    constructor() {}

    resolve(next: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    }
}

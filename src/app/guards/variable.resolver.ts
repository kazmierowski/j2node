import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {GlobalVariableService} from "../global-variable.service";
import {isNumber} from "util";

@Injectable()
export class VariableResolver implements Resolve<any> {
    constructor(private globalVariables: GlobalVariableService) {
    }

    // todo: bad resolver implementation in app.module.ts
    resolve(next: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        let loginId = this.globalVariables.getLoginUserId();

        if(this.globalVariables.getGlobalUser() === undefined) {
            return this.globalVariables.fetchGlobalUser();

            // return this.globalVariables.fetchGlobalUser(loginId ? loginId )
            //
            // if(loginId === undefined) {
            //
            // } else if(isNumber(loginId)) {
            //     return this.globalVariables.fetchGlobalUser(loginId);
            // }
        }
    }
}

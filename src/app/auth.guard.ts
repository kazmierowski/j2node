import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('zalogowany') === 'true') {
            if (state.url === '/login') {
                this.router.navigate(['/board']);
            } else {
                return true;
            }
        } else if (state.url !== '/login' && localStorage.getItem('zalogowany') !== 'true') {
            this.router.navigate(['/login']);
        } else if (state.url === '/login' && localStorage.getItem('zalogowany') !== 'true') {
            return true;
        }
    }
}

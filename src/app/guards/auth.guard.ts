import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    // todo: need to change the way that we are checking logged customer (not 'session=')
    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (document.cookie.indexOf('session=') !== -1) {
            if (state.url === '/login') {
                this.router.navigate(['/user-dashboard']);
            } else {
                return true;
            }
        } else if (state.url !== '/login' && document.cookie.indexOf('session=') === -1) {
            localStorage.setItem('lastUrl', state.url);
            this.router.navigate(['/login']);
            return false;
        } else if (state.url === '/login' && document.cookie.indexOf('session=') === -1) {
            return true;
        }
    }
}

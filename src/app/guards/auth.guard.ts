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
        console.log('guard');
        if (document.cookie.indexOf('session=') !== -1) {
            if (state.url === '/login') {
                this.router.navigate(['/board']);
            } else {
                return true;
            }
        } else if (state.url !== '/login' && document.cookie.indexOf('session=') === -1) {
            this.router.navigate(['/login']);
        } else if (state.url === '/login' && document.cookie.indexOf('session=') === -1) {
            return true;
        }
    }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ProjectDashboardService} from '../components/dashboards/project-dashboard/project-dashboard.service';
import {Board} from '../models/Board.model';
import {BoardService} from '../components/board/board.service';

@Injectable()
export class BoardResolver implements Resolve<Board> {
    constructor(private boardService: BoardService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.boardService.getBoardFrontend(+route.paramMap.get('boardId'));
    }
}

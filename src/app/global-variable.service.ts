import {Injectable} from '@angular/core';
import {User} from './models/User.model';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Project} from './models/Project.model';
import {Board} from './models/Board.model';


@Injectable()
export class GlobalVariableService {

    private globalUser: User;
    private globalUserProjects = {};
    private globalUserBoards= {};
    private fetchStatus = {};

    constructor(private http: Http) {
    }

    public setFetchStatus(dataSet: string, fetchStatus: boolean) {
        this.fetchStatus[dataSet] = fetchStatus;
    }

    public getFetchStatus(dataSet: string) {
        return this.fetchStatus[dataSet];
    }

    public setGlobalUser(user: User) {
        this.globalUser = user;
    }

    public getGlobalUser(): User {
        return this.globalUser;
    }

    public setGlobalUserProjects(projects, fetchStatus: boolean) {
        this.globalUserProjects = projects;
        this.setFetchStatus('projects', fetchStatus);
    }

    public getGlobalUserProjects() {
        return this.globalUserProjects;
    }

    public setGlobalUserBoards(boards, fetchStatus: boolean) {
        this.globalUserBoards = boards;
        this.setFetchStatus('boards', fetchStatus);
    }

    public getGlobalUserBoards() {
        return this.globalUserBoards;
    }

    public fetchCompleteGlobalUser() {
        return this.http.get('/user/userCompleteFrontendData')
            .map((res: Response) => res.json())
            .do((res) => {
                this.setGlobalUser(new User(
                    res.user['user_id'],
                    res.user['user_firstName'],
                    res.user['user_lastName'],
                    res.user['user_email'],
                    res.user['user_phone'],
                    res.user['user_country'],
                    res.user['user_city'],
                    res.user['user_street'],
                    res.user['userProjects'],
                    res.user['userBoards']
                ));

                for (const project of res.projects) {
                    this.globalUserProjects[project.project_id] = new Project(
                        project.project_id,
                        project.project_name,
                        project.project_admin,
                        false
                    );
                }

                for (const board of res.boards) {
                    this.globalUserBoards[board.board_id] = new Board(
                        board.board_id,
                        board.board_name,
                        board.board_isTemplate,
                        false
                    );
                }
            });
    }
}

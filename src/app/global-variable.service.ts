import {Injectable} from '@angular/core';
import {User} from "./models/User.model";
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Project} from "./models/Project.model";


@Injectable()
export class GlobalVariableService {

    private globalUser: User;
    private globalUserProjects = [];
    private globalUserBoards= [];
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
                this.setGlobalUserProjects(res.projects, false);
                this.setGlobalUserBoards(res.boards, false);
            });
    }

    // public fetchGlobalUser() {
    //     return this.getUserFrontend()
    //         .concat(this.getUserProjects()
    //             .concat(this.getUserBoards()))
    // }
    //
    //
    //
    // public getUserFrontend() {
    //     return this.http.get('/user/userFrontendData')
    //         .map((res: Response) => res.json())
    //         .do((res) => {
    //             this.setGlobalUser(
    //                 new User(
    //                     res['user_id'],
    //                     res['user_firstName'],
    //                     res['user_lastName'],
    //                     res['user_email'],
    //                     res['user_phone'],
    //                     res['user_country'],
    //                     res['user_city'],
    //                     res['user_street'],
    //                     res['userProjects'],
    //                     res['userBoards']
    //                 )
    //             )
    //         })
    // }
    //
    // public getUserProjects() {
    //    return this.http.get('/user/userProjectsInfo')
    //         .map((res: Response) => res.json())
    //         .do(
    //             (res) => {
    //                 this.setGlobalUserProjects(res);
    //             }
    //         )
    // }
    //
    // public getUserBoards() {
    //     return this.http.get('/user/userBoardsInfo')
    //         .map((res: Response) => res.json())
    //         .do(
    //             (res) => {
    //                 this.setGlobalUserBoards(res);
    //             }
    //         )
    // }
}

import {Injectable} from '@angular/core';
import {User} from "./models/User.model";
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Project} from "./models/Project.model";


@Injectable()
export class GlobalVariableService {

    private globalUser: User;
    private globalUserProjects = [];

    constructor(private http: Http) {
    }

    public setGlobalUser(user: User) {
        this.globalUser = user;
    }

    public getGlobalUser(): User {
        return this.globalUser;
    }

    public setGlobalUserProjects(projects) {
        this.globalUserProjects = projects;
    }

    public getGlobalUserProjects() {
        return this.globalUserProjects;
    }

    public fetchGlobalUser() {
        return this.getUserFrontend().concat(this.getUserProjects())
    }

    public getUserFrontend() {
        return this.http.get('/user/userFrontendData')
            .map((res: Response) => res.json())
            .do((res) => {
                this.setGlobalUser(
                    new User(
                        res['user_id'],
                        res['user_firstName'],
                        res['user_lastName'],
                        res['user_email'],
                        res['user_phone'],
                        res['user_country'],
                        res['user_city'],
                        res['user_street'],
                        res['userProjects'],
                        res['userBoards']
                    )
                )
            })
    }

    public getUserProjects() {
       return this.http.get('/user/userProjectsInfo')
            .map((res: Response) => res.json())
            .do(
                (res) => {
                    this.setGlobalUserProjects(res);
                }
            )
    }
}

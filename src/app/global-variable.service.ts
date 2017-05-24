import {Injectable} from '@angular/core';
import {User} from "./models/User.model";
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GlobalVariableService {

    private globalUser: User;
    private loginUserId: number;

    constructor(private http: Http) {
    }

    public setGlobalUser(user: User) {
        this.globalUser = user;
    }

    public getGlobalUser(): User {
        return this.globalUser;
    }

    public setLoginUserId(userId: number) {
        this.loginUserId = userId;
    }

    public getLoginUserId(): number {
        return this.loginUserId;
    }

    public fetchGlobalUser() {
        let that = this;

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
          .concat(
            that.http.get('/user/userProjectsInfo')
              .map((res: Response) => res.json())
              .do(
                (res) => {
                    this.getGlobalUser().setUserProjects(res);
                }
              )
          )
    }
}

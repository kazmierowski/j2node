import {Injectable} from '@angular/core';
import {User} from "./models/User.model";
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class GlobalVariableService {

    private globalUser: User;

    constructor(private http: Http) {
    }

    public setGlobalUser(user: User) {
        this.globalUser = user;
    }

    public getGlobalUser() {
        return this.globalUser;
    }

    public fetchGlobalUser(userId) {
        let that = this;
        return this.http.get('/user/userFrontendData/' + userId)
          .map((res: Response) => res.json())
          .do((res) => {
              console.log('fetch first do');
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
            that.http.get('/user/userProjectsInfo/' + userId)
              .map((res: Response) => res.json())
              .do(
                (res) => {
                    console.log('fetching');
                    this.getGlobalUser().setUserProjects(res);
                }
              )
          )
    }
}

import { Injectable } from '@angular/core';
import {User} from "./models/User.model";

@Injectable()
export class GlobalVariableService {

  private globalUser: User;

  constructor() { }

  public setGlobalUser(user: User) {
    this.globalUser = user;
  }

  public getGlobalUser() {
    return this.globalUser;
  }
}

import { Injectable } from '@angular/core';
import {GlobalVariableService} from "../../services/global-variable.service";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class LeftMenuService {

  constructor(private globalVariables: GlobalVariableService, private router: ActivatedRoute) { }

  getMenuOptions() {
    let route = this.router;
    console.log(route);

    this.globalVariables.getSideMenuOptions('board');
  }

}

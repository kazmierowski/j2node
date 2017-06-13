import { Injectable } from '@angular/core';
import {GlobalVariableService} from "../../services/global-variable.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class LeftMenuService {

  constructor(private globalVariables: GlobalVariableService, private router: Router) {

  }

  getMenuOptions() {

  }

}

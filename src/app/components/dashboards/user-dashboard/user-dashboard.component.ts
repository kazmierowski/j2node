import { Component, OnInit } from '@angular/core';
import {GlobalVariableService} from "../../../global-variable.service";
import {ProjectDashboardService} from "../project-dashboard/project-dashboard.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  public user;
  public projects;

  constructor(private globalVariables: GlobalVariableService) { }

  ngOnInit() {
    this.user = this.globalVariables.getGlobalUser();
    this.projects = this.globalVariables.getGlobalUserProjects();
  }

}

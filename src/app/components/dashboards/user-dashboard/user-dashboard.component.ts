import { Component, OnInit } from '@angular/core';
import {GlobalVariableService} from '../../../services/global-data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  public user;
  public projects;
  public boards;

  constructor(public globalVariables: GlobalVariableService) { }

  ngOnInit() {
    this.user = this.globalVariables.getGlobalUser();
    this.projects = this.globalVariables.getGlobalUserProjects();
    this.boards = this.globalVariables.getGlobalUserBoards();
  }
}

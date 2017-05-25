import { Component, OnInit } from '@angular/core';
import {ProjectDashboardService} from "./project-dashboard.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss'],
  providers: [ProjectDashboardService]
})
export class ProjectDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public project;

  ngOnInit() {
    this.project = this.route.snapshot.data['project'][0];
  }

}

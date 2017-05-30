import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  @Input('projects') projects;

  constructor() { }

  ngOnInit() {
  }

}

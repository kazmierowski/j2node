import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.scss']
})
export class BoardsListComponent implements OnInit {

  @Input('boards') boards;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  @Input('userProjects') userProjects;
  @Input('issueTypes') issueTypes;
  @Input('priorityList') priorityList;
  @Input('labelsList') labelsList;



  public project;
  public issueType;
  public title;
  public reporter;
  public description;
  public priority;
  public label;

  constructor(public dialogRef: MdDialogRef<any>, public elementRef: ElementRef) { }

  ngOnInit() {
  }

}

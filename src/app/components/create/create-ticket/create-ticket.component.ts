import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {CreateTicketService} from "./create-ticket.service";

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
  @Input('projectMembersList') projectMembersList;
  @Input('sprintList') sprintList;



  public project;
  public issueType;
  public title;
  public reporter;
  public description;
  public points;
  public priority;
  public steps = [2, 3, 6, 8];

  private service;

  constructor(public dialogRef: MdDialogRef<any>, public elementRef: ElementRef) { }

  ngOnInit() {
  }

  saveTicket() {
    this.service.saveTicket({name: 'test-ticket'});
  }

  cancelCreate() {
    // TODO: add confirmation dialog
    this.dialogRef.close();
    console.log('Creation canceled');
  }

}

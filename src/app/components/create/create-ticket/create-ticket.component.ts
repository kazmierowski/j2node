import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {GlobalVariableService} from "../../../services/global-data.service";
import {ActivatedRoute} from "@angular/router";

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


  /** ticket inputs */
  public project;
  public ticketType;
  public title;
  public reporter;
  public assigne;
  public description;
  public points;
  public priority;
  public steps = [2, 3, 6, 8];

  /** provided */
  public ticketTypes;
  public projectUsers;
  private service;
  private activeProject;

  constructor(
      public dialogRef: MdDialogRef<any>,
      public elementRef: ElementRef,
      private globalVariables: GlobalVariableService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.project = this.activeProject;
    this.reporter = this.getCreatorId();
  }

  getCreatorId() {
    return this.globalVariables.getGlobalUser().getId();
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

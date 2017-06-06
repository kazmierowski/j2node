import {Component, ElementRef, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<any>, public elementRef: ElementRef) { }

  ngOnInit() {
  }

}

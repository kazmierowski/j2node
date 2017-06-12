import {Component, Injectable} from '@angular/core';
import {CreateTicketComponent} from "../components/create/create-ticket/create-ticket.component";
import {MdDialog} from "@angular/material";

@Injectable()
export class DialogService {

  private dialogs: any[] = [];

  constructor(private dialog: MdDialog) { }

  open(component, options) {
    let dialogRef = this.dialog.open(component, {
      height: options.height || '500px',
      width: options.width || '600px'
    });

    return dialogRef;
  }
}

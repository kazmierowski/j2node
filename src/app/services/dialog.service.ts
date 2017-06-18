import {Component, Injectable} from '@angular/core';
import {CreateTicketComponent} from "../components/create/create-ticket/create-ticket.component";
import {MdDialog} from "@angular/material";

@Injectable()
export class DialogService {

  private dialogs: any[] = [];

  private dialogConfig = {
    width: '700px',
    height: '800px',
    disableClose: true
  };

  constructor(private dialog: MdDialog) { }

  open(component, options) {
    return this.dialog.open(component, Object.assign(this.dialogConfig, options));
  }
}

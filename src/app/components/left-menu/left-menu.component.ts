import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterStateSnapshot} from "@angular/router";
import {LocationStrategy} from "@angular/common";
import {GlobalVariableService} from "../../services/global-variable.service";
import {LeftMenuService} from "./left-menu.service";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  providers: [LeftMenuService]
})
export class LeftMenuComponent implements OnInit {

  public url: string;
  public menuOptions;

  constructor(private globalVariables: GlobalVariableService, private service: LeftMenuService) { }

  ngOnInit() {

    this.menuOptions = this.service.getMenuOptions();
    console.log(this.menuOptions);
  }

}

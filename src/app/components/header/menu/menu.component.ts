import { Component, OnInit } from '@angular/core';
import {MenuService} from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  public menuFields;

  constructor(private service: MenuService) { }

  ngOnInit() {
    this.menuFields = [];
    this.service.getMenuFields().subscribe(
        res => {
          for (const field in res) {
              if (res.hasOwnProperty(field)) {
                  this.menuFields.push(res[field]);
              }
          }
        }
    );
  }

}

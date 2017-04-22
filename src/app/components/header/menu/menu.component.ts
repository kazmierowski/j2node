import { Component, OnInit } from '@angular/core';
import {MenuService} from "./menu.service";

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
          console.log(res);
          for(let field in res) {
              if(res.hasOwnProperty(field)) {
                  console.log(field);
                  this.menuFields.push(res[field]);
                  // this.menuFields
              }

          }

          console.log(this.menuFields);
          // this.menuFields = res;
          // for(let field of res) {
          //   this.menuFields.push(field);
          // }
        }
    )
  }

}

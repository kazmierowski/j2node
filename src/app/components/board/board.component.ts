import { Component, OnInit } from '@angular/core';
import {BoardColumnService} from "./board-column/board-column.service";
import {Column} from "../../models/Column.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [BoardColumnService]
})
export class BoardComponent implements OnInit {

  public columns = [];

  constructor(private columnService: BoardColumnService) { }

  ngOnInit() {
    this.columnService.getColumnInfo().subscribe(
        res => {
          for(let column in res){
            if(res.hasOwnProperty(column)) {
              let obj = res[column];
              this.columns.push(new Column(
                  obj['name'],
                  obj['maxLength'],
                  obj['status']

              ))
            }
          }
        }
    )
  }

}

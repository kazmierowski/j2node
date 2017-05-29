import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[columnSize]'
})
export class ColumnSizeDirective {

  @Input('columnSize') columnCount: number;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.el.nativeElement.style.width = 99 / this.columnCount + '%';
  }

}

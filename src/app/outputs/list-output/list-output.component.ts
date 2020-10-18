import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rk-list-output',
  templateUrl: './list-output.component.html',
  styleUrls: ['./list-output.component.css']
})
export class ListOutputComponent implements OnChanges {
  @Input() public marble: string;
  @Output() public printed =  new EventEmitter();
  public list = [];

  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.marble && changes.marble.currentValue) {
        const currentMarble = changes.marble.currentValue;
        this.list.unshift(currentMarble);
        this.printed.emit(new CustomEvent('printed', { detail: currentMarble}));
    }
  }
}

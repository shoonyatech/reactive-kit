import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rk-graphical-stream',
  templateUrl: './graphical-stream.component.html',
  styleUrls: ['./graphical-stream.component.css']
})
export class GraphicalStreamComponent implements OnChanges {
  @Input() public marble: string;
  @Input() public length: number;
  @Output() public added =  new EventEmitter();
  public isLive = false;
  public slotHeight = 30;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.marble && changes.marble.currentValue) {
        const currentMarble = changes.marble.currentValue;
        this.isLive = true;
        setTimeout(() => {
          this.added.emit(new CustomEvent('added', { detail: currentMarble}));
          this.isLive = false;
        }, 1000);
    }
  }
}

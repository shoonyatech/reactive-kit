import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rk-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent  implements OnChanges {

  private operators = [{},{}];
  private operatorLength = 300;
  public isLive = false;

  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.marble && changes.marble.currentValue) {
        const currentMarble = changes.marble.currentValue;
        this.isLive = true;
        setTimeout(() => {
          this.isLive = false;
        }, 1000);
    }
  }
}
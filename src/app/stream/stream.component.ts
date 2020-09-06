import { Component, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rk-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnChanges, OnDestroy {
  @Input() marble: string;
  timer: number;
  dataIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if(this.marble) {
      this.timer = setInterval(() => {
        this.dataIndex++;
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

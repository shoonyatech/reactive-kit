import { Component, Input, Output, OnDestroy, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'rk-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnChanges, OnDestroy {
  @Input() marble: string;
  @Output() subscribe =  new EventEmitter();
  timer: number;
  dataIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if(this.marble) {
      this.timer = setInterval(() => {
        this.dataIndex++;

        if (this.dataIndex === 4) {
          this.subscribe.emit(new CustomEvent('subscribe', { detail: this.marble}));
          clearInterval(this.timer);
        }
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

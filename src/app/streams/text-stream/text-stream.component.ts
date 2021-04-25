import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'rk-text-stream',
  templateUrl: './text-stream.component.html',
  styleUrls: ['./text-stream.component.scss'],
})
export class StreamComponent implements OnInit, OnDestroy {
  @Input() public marble?: string;
  @Input() length!: number;
  @Output() public added = new EventEmitter();
  @Output() public subscribe = new EventEmitter();
  public slots: (string | undefined)[];
  public timer!: any;
  public dataIndex = 0;

  constructor() {
    this.slots = [];
  }

  public ngOnInit(): void {
    this.length = this.length || 4;
    for (let i = 0; i < this.length; i++) {
      this.slots.push(undefined);
    }

    this.timer = setInterval(() => {
      this.slots = [this.marble, ...this.slots.slice(0, this.slots.length - 1)];

      const lastItem = this.slots[this.slots.length - 1];
      if (lastItem) {
        this.subscribe.emit(new CustomEvent('subscribe', { detail: lastItem }));
      }

      if (this.marble) {
        this.marble = undefined;
        this.added.emit(new CustomEvent('added', { detail: this.marble }));
      }
    }, 100);
  }

  public ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

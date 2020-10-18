import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
})
export class StreamComponent implements OnInit, OnDestroy {
  @Input() public marble: string;
  @Input() public length: number;
  @Output() public added =  new EventEmitter();
  @Output() public subscribe =  new EventEmitter();
  public slots: string[];
  public timer: number;
  public dataIndex = 0;

  constructor() {
    this.slots = [];
  }

  public ngOnInit(): void {
    this.length = this.length || 4;
    for (let i = 0; i < this.length; i++) {
      this.slots.push(null);
    }

    this.timer = setInterval(() => {
      this.slots = [ this.marble, ...this.slots.slice(0, this.slots.length - 1)];

      const lastItem = this.slots[this.slots.length - 1];
      if (lastItem) {
        this.subscribe.emit(new CustomEvent('subscribe', { detail: lastItem}));
      }

      if (this.marble) {
        this.marble = null;
        this.added.emit(new CustomEvent('added', { detail: this.marble}));
      }

    }, 1000);
  }

  public ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

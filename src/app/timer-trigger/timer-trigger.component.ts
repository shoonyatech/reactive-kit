import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'rk-timer-trigger',
  templateUrl: './timer-trigger.component.html',
  styleUrls: ['./timer-trigger.component.css']
})
export class TimerTriggerComponent implements OnInit {
  @Output() trigger = new EventEmitter();
  @Input() interval = 3;

  constructor() { }

  ngOnInit() {
    setInterval(() => this.send('▓'), this.interval * 1000);
  }

  send(obj): void {
    this.trigger.emit(new CustomEvent('trigger', { detail: obj}));
  }

}

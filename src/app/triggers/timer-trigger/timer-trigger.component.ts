import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-timer-trigger',
  templateUrl: './timer-trigger.component.html',
  styleUrls: ['./timer-trigger.component.scss'],
})
export class TimerTriggerComponent implements OnInit {
  @Output() public trigger = new EventEmitter();
  @Input() public interval = 3;

  constructor() {}

  public ngOnInit() {
    setInterval(() => this.send('▓'), this.interval * 1000);
  }

  public send(obj: any): void {
    this.trigger.emit(new CustomEvent('trigger', { detail: obj }));
  }
}

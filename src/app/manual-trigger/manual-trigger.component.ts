import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rk-manual-trigger',
  templateUrl: './manual-trigger.component.html',
  styleUrls: ['./manual-trigger.component.css']
})
export class ManualTriggerComponent implements OnInit {

  @Output() trigger = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  send(obj): void {
    this.trigger.emit(new CustomEvent('trigger', { detail: obj}));
  }

}

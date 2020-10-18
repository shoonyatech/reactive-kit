import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-manual-trigger',
  templateUrl: './manual-trigger.component.html',
  styleUrls: ['./manual-trigger.component.css'],
})
export class ManualTriggerComponent implements OnInit {
  public json = `{
  fruit: 'apple',
  color: 'red'
}`;

  @Output() public trigger = new EventEmitter();
  constructor() { }

  public ngOnInit(): void {
  }

  public send(obj): void {
    this.trigger.emit(new CustomEvent('trigger', { detail: obj}));
  }

}

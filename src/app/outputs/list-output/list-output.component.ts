import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'rk-list-output',
  templateUrl: './list-output.component.html',
  styleUrls: ['./list-output.component.scss'],
})
export class ListOutputComponent implements OnChanges {
  @Input() public marble!: string | undefined;
  @Output() public printed = new EventEmitter();
  public list: string[] = [];

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.marble && changes.marble.currentValue) {
      const currentMarble = changes.marble.currentValue;
      this.list.unshift(currentMarble);
      this.printed.emit(new CustomEvent('printed', { detail: currentMarble }));
    }
  }
}

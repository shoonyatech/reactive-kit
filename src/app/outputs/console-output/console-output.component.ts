import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-console-output',
  templateUrl: './console-output.component.html',
  styleUrls: ['./console-output.component.css'],
})
export class ConsoleOutputComponent implements OnInit {
  @Input() public msg!: string | undefined;
  @Output() public printed = new EventEmitter();
  public output = '';
  public skip = true;

  constructor() {}

  public ngOnInit(): void {
    setInterval(() => {
      if (this.msg) {
        if (this.skip) {
          this.skip = false;
        } else {
          this.output = this.output + ' ' + this.msg;
          this.msg = undefined;
          this.printed.emit(new CustomEvent('printed', { detail: this.msg }));
          this.skip = true;
        }
      }
    }, 1000);
  }
}

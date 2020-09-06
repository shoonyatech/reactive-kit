import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rk-console-output',
  templateUrl: './console-output.component.html',
  styleUrls: ['./console-output.component.css']
})
export class ConsoleOutputComponent implements OnInit {
  @Input() msg: string;
  @Output() printed =  new EventEmitter();
  output = '';
  skip = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.msg) {
        if(this.skip) {
          this.skip = false;
        } else {
          this.output = this.output + ' ' + this.msg;
          this.msg = null;
          this.printed.emit(new CustomEvent('printed', { detail: this.msg}));
          this.skip = true;
        }
      }
    }, 1000);
  }

}

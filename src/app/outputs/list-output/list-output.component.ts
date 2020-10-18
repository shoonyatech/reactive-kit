import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-list-output',
  templateUrl: './list-output.component.html',
  styleUrls: ['./list-output.component.css']
})
export class ListOutputComponent implements OnInit {
  @Input() public msg: string;
  @Output() public printed =  new EventEmitter();
  public output = '';
  public skip = true;
  public list = [];

  constructor() { }

  public ngOnInit(): void {
    setInterval(() => {
      if (this.msg) {
        if (this.skip) {
          this.skip = false;
        } else {
          this.list.unshift(this.msg);
          this.msg = null;
          this.printed.emit(new CustomEvent('printed', { detail: this.msg}));
          this.skip = true;
        }
      }
    }, 1000);
  }

}

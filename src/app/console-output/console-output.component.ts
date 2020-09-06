import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rk-console-output',
  templateUrl: './console-output.component.html',
  styleUrls: ['./console-output.component.css']
})
export class ConsoleOutputComponent implements OnInit {
  @Input() msg: string;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rk-code-window',
  templateUrl: './code-window.component.html',
  styleUrls: ['./code-window.component.css']
})
export class CodeWindowComponent implements OnInit {
  @Input() code = '';
  constructor() { }

  ngOnInit(): void {
  }

}

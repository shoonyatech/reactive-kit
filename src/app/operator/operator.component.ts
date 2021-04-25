import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rk-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
  @Input() operatorName = '';
  @Input() input = {};
  public output = {};

  constructor() { }

  ngOnInit(): void {
  }

}

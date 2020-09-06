import { Component, OnInit, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'rk-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  nextObject: any;
  output: any;

  ngOnInit(): void {
  }

  next(e): void {
    this.nextObject = e.detail;
  }

  subs(e): void {
    this.output = e.detail;
  }
}

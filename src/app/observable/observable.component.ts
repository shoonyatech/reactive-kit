import { Component, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  public nextObject: any;
  public output: any;

  public ngOnInit(): void {
  }

  public next(e): void {
    this.nextObject = e.detail;
  }

  public resetNextObject(e): void {
    this.nextObject = null;
    this.output = e.detail;
  }

  public resetOutput(e): void {
    this.nextObject = null;
    this.output = null;
  }
}

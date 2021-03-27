import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rk-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  public nextObject: string | undefined;
  public output: string | undefined;

  public ngOnInit(): void {}

  public next(e: CustomEvent): void {
    this.nextObject = e.detail;
  }

  public resetNextObject(e: CustomEvent): void {
    this.nextObject = undefined;
    this.output = e.detail;
  }

  public resetOutput(): void {
    this.nextObject = undefined;
    this.output = undefined;
  }
}

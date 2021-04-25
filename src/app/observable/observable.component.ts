import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  @Output() public code = new EventEmitter();
  public nextObject: any;
  public output: any;

  public ngOnInit(): void {
    const codeOutput = ``;

    this.code.emit(new CustomEvent('code', { detail: codeOutput}));
  }

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

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'rk-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  addToStream: any;
  nextObject: any;

  ngOnInit(): void {
  }

  next(e): void {
    this.nextObject = e.detail;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'rk-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  timer: number;
  dataIndex = 0;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.dataIndex++;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

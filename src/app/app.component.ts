import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'reactive-kit';
  public codeOutput: string;

  showCode(e) {
    this.codeOutput = e.detail;
  }
}

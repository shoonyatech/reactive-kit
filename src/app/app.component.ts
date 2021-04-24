import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'reactive-kit';
  public codeOutput = '';

  showCode(e:CustomEvent) {
    this.codeOutput = e.detail;
  }
}

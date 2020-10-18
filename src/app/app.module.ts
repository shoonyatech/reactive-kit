import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsoleOutputComponent } from './outputs/console-output/console-output.component';
import { ManualTriggerComponent } from './triggers/manual-trigger/manual-trigger.component';
import { ObservableComponent } from './observable/observable.component';
import { StreamComponent } from './stream/stream.component';
import { TimerTriggerComponent } from './triggers/timer-trigger/timer-trigger.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ObservableComponent,
    ManualTriggerComponent,
    StreamComponent,
    ConsoleOutputComponent,
    TimerTriggerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule { }

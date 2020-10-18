import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsoleOutputComponent } from './console-output/console-output.component';
import { ManualTriggerComponent } from './manual-trigger/manual-trigger.component';
import { ObservableComponent } from './observable/observable.component';
import { StreamComponent } from './stream/stream.component';
import { TimerTriggerComponent } from './timer-trigger/timer-trigger.component';

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

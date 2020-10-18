import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsoleOutputComponent } from './outputs/console-output/console-output.component';
import { ManualTriggerComponent } from './triggers/manual-trigger/manual-trigger.component';
import { ObservableComponent } from './observable/observable.component';
import { StreamComponent } from './streams/text-stream/text-stream.component';
import { TimerTriggerComponent } from './triggers/timer-trigger/timer-trigger.component';
import { ListOutputComponent } from './outputs/list-output/list-output.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ObservableComponent,
    ManualTriggerComponent,
    StreamComponent,
    ConsoleOutputComponent,
    TimerTriggerComponent,
    ListOutputComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule { }

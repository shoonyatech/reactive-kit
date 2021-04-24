import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsoleOutputComponent } from './outputs/console-output/console-output.component';
import { ManualTriggerComponent } from './triggers/manual-trigger/manual-trigger.component';
import { ObservableComponent } from './observable/observable.component';
import { StreamComponent } from './streams/text-stream/text-stream.component';
import { TimerTriggerComponent } from './triggers/timer-trigger/timer-trigger.component';
import { ListOutputComponent } from './outputs/list-output/list-output.component';
import { GraphicalStreamComponent } from './streams/graphical-stream/graphical-stream.component';
import { CodeWindowComponent } from './windows/code-window/code-window.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ManualTriggerComponent,
    StreamComponent,
    ConsoleOutputComponent,
    TimerTriggerComponent,
    ListOutputComponent,
    GraphicalStreamComponent,
    CodeWindowComponent,
    PipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

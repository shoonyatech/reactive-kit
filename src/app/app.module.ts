import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { ManualTriggerComponent } from './manual-trigger/manual-trigger.component';
import { StreamComponent } from './stream/stream.component';
import { ConsoleOutputComponent } from './console-output/console-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ManualTriggerComponent,
    StreamComponent,
    ConsoleOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DumpComponent} from "./dump.component";
import {SmartComponent} from "./smart.component";
import {LoggableDirective} from "./directives/loggable.directive";
import {VisibleDirective} from "./directives/visible.directive";

@NgModule({
  declarations: [
    AppComponent,
    DumpComponent,
    SmartComponent,
    LoggableDirective,
    VisibleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

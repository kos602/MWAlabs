import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UsersModule, USER_ROUTES} from "./modules/users/users.module";
import {DataService} from "./services/data.service";
import {LogService} from "./services/log.service";

const ROUTES : Routes = [
  { path: 'users', children: USER_ROUTES }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    DataService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

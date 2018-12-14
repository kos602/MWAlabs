import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataService} from "./services/data.service";
import {LogService} from "./services/log.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UsersModule} from "./modules/users/users.module";

const ROUTES : Routes = [
  { path: 'users', loadChildren: './modules/users/users.module#UsersModule' }
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { UserDetailsComponent } from './user-details.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {DataService} from "../../services/data.service";
import {UserinfoGuard} from "../../guards/userinfo.guard";
import {UsersComponent} from "./users.component";

export const USER_ROUTES: Routes = [
  {path: '', component: UsersComponent },
  {path: 'error', component: NotFoundComponent },
  {path: ':_id', canActivate: [UserinfoGuard], component: UserDetailsComponent }
];

@NgModule({
  declarations: [
    UsersComponent,
    NotFoundComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    DataService,
    HttpClient,
    UserinfoGuard
  ],
  bootstrap: [
    UsersComponent
  ]
})
export class UsersModule { }

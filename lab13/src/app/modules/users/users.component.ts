import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor="let user of users;"> 
        <a [routerLink]="[user.login.uuid]"> {{ user.name.first + " " + user.name.last  }} </a> 
      </li>
    </ul>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  private users;
  constructor(private data : DataService, private routerModule: RouterModule) { }

  ngOnInit() {
    this.users = this.data.getData();
  }

}

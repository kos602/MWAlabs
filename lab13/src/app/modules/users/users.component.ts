import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor="let user of users;"> 
        <a [routerLink]="[user._id]"> {{ user.name.first + " " + user.name.last  }} </a> 
      </li>
    </ul>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  private users;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.users = this.data.getData();
  }

}

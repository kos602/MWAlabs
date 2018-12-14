import { Component } from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: object[];
  constructor(private data: DataService) {
    this.users = this.data.getData();
  }

  ngOnInit() {
    this.data.getOnlineData();
  }

  title = 'lab13';
}

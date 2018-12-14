import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  template: `
    <pre>
      {{user}}
    </pre>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {
  private user;
  private _id;
  constructor(private data : DataService, private router: ActivatedRoute) { }

  ngOnInit() {
    this._id = this.router.params.subscribe(next => this._id = next['_id']);
    this.user = this.data.getData()[this._id];
  }

}

import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-details',
  template: `
    <dl>
      <dt>Name:</dt><dd>{{user.name.first}} {{user.name.last}}</dd>
      <dt>Gender</dt><dd>{{user.gender}}</dd>
      <dt>Email</dt><dd>{{user.email}}</dd>
      <dt>Phone</dt><dd>{{user.phone}}</dd>
      <dt>DOB</dt><dd>{{user.dob.date}}</dd>
    </dl>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {
  private user;
  private _id;
  private subscription: Subscription;
  constructor(private data : DataService, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this._id = param['_id']
    );
    console.log(this._id);
    console.log(this.data.getData());
    for (let user of this.data.getData()) {
      if (user["login"]["uuid"] === this._id) this.user = user;
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

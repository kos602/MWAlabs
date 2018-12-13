import { Injectable } from '@angular/core';
import {LogService} from "./log.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private logger: LogService, private http: HttpClient) {
    this.getUsers().subscribe(res => this.data = res);
  }

  private data = {};

  ngOnInit() {
    this.getUsers().subscribe(res => this.data = res);
  }

  getData() {
    return this.data;
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

}

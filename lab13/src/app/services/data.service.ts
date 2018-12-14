import { Injectable } from '@angular/core';
import {LogService} from "./log.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private logger: LogService, private http: HttpClient) {
  }

  private data: object[] = [];

  ngOnInit() {
    this.getOnlineData();
  }

  getCachedData() {
    return this.data;
  }

  getData() {
    console.log(this.data);
    if (this.data.length === 0) {
      this.getOnlineData();
    }
    return this.getCachedData();
  }

  getOnlineData() {
    return new Promise((resolve, reject) => {
      this.http.get('https://randomuser.me/api/?results=10')
        .subscribe(
          res => {
            resolve(res)
          },
          error => console.log(error),
          null
        )
    }).then(value => this.data = value["results"])

  }

}

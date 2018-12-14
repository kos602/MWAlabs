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

  async getOnlineData() {
    await this.http.get('https://randomuser.me/api/?results=10')
      .subscribe(
        res => this.data = res.results,
        error => console.log(error),
        null
      );
  }

}

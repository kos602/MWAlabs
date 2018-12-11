import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message2 = "Message 2 from Parent Component";
  public message3 = "Message 3 from Parent Component";

  public outputData;

  showOutputData(data){
    this.outputData = data;
  }
  title = 'CS 572 MWA';
}

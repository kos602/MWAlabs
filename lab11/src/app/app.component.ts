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

  private CounterValue = 0;

  showOutputData(data){
    this.outputData = data;
  }

  counterChange(e){
    this.CounterValue = e;
  }

  title = 'CS 572 MWA';
}

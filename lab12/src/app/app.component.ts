import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My applied courses';
  items: string[] = ["CS401", "CS525", "CS472", "CS572"];
}

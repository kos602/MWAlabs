import { Component, Input } from '@angular/core';

@Component({
	selector: 'myUl',
	template: 	`
  <ul>
    <myLi *ngFor="let item of items" [item]="item" [isVisible]="true" loggable></myLi>
  </ul>
  `,
	styles: ["ul{list-style:none}"]
})
export class SmartComponent{
	@Input() items:string[];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click)="decrement()">-</button>
      {{this.counterValue}}
      <button (click)="increment()" >+</button>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counterValue:number;

  constructor() {
    this.counterValue = 0;
  }

  decrement() {
    this.counterValue--;
  }

  increment() {
    this.counterValue++;
  }

  ngOnInit() {}

}

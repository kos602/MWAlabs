import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter:</h1>
    <fieldset style="max-width: 72px">
        <legend>Counter</legend>
      <button (click)="decrement()">-</button>
      {{this.counterValue}}
      <button (click)="increment()" >+</button>
    </fieldset>
  `,
  styles: [],
  inputs: ['counterValue']
})
export class CounterComponent implements OnInit {
  counterValue:number;

  constructor() {
    this.counterValue = 0;
  }

  decrement() {
    this.counterValue--;
    return false;
  }

  increment() {
    this.counterValue++;
    return false;
  }

  ngOnInit() {}

}

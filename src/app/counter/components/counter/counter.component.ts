import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ counter }}</h1>
    <button (click)="plus(-1)">-1</button>
    <button (click)="plus(1)">+1</button>
    <button (click)="reset()">Reiniciar</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  plus(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 10;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Cápitan América',
    'Thor',
  ];
  public deletadHero?: string;

  deleteLast(): void {
    this.deletadHero = this.heroes.pop();
  }
}

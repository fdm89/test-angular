import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';
import { HEROES } from '../models/Mock-heroes';

@Component({
  selector: 'angular-exam-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes = HEROES
  selectedHero?: Hero;
  selectedItem!: Item;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }
  selectItem(item: Item){
    this.selectedItem= item;
  }
  cancel(){
    delete this.selectedItem;
  }

  ngOnInit(): void {
  }

}

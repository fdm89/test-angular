import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HEROES } from '../models/Mock-heroes';
import { Hero } from '../models/Hero';

@Component({
  selector: 'angular-exam-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
@Input() hero?:Hero
@Output() deleteItem = new EventEmitter<Hero>();
  constructor() { }

  cancel(hero:Hero){
    this.deleteItem.emit(hero)
  }

  ngOnInit(): void {
  }

}







import { Component, OnInit } from '@angular/core';

// import class hero
import { Hero } from '../hero';

// import list heroes from mock HEROES
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// import list heroes from mock HEROES, and can use in component html
  heroes = HEROES;

  selectedHero: Hero;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }

}

import { Component, OnInit } from '@angular/core';

// import class hero
import { Hero } from '../hero';

// import list heroes from mock HEROES
import { HEROES } from '../mock-heroes';

// import heroService to use getHeroes and replace for heroes = HEROES
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// import list heroes from mock HEROES, and can use in component html
  // heroes = HEROES;
  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // return heroes by call getHeroes() method
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

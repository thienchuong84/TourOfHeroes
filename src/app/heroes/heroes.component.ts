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

  // selectedHero: Hero;  // ko còn dùng khi click a tag routerLink

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // return heroes by call getHeroes() method
    this.getHeroes();
  }

  // ko còn dùng khi click a tag routerLink
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

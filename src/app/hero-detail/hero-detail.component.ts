import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

// for get id from url
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    // get hero follow id from url
    this.getHero();
  }

  getHero(): void {
    // route.snapshot is a static image of the route information shortly after the component was created
    // the paramMap is a dictionaty of route parameter values extracted from the URL The "id" key returns the id of the hero to fetch
    // Route parameters are always to strings. The javascript (+) operator converts the string to number , which is what a hero id should be
    const id = +this.route.snapshot.paramMap.get('id');

    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}

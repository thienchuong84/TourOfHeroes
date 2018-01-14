import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  // muốn sử dụng method, functions trong server thì khởi tạo nó trong constructure
  constructor(private messageService: MessageService) { }

  // Add a getHeroes method to return the mock heroes.
  // getHeroes: Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}

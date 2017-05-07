import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {
  heroes: Hero[] = HEROES;
  nextId: number = this.heroes[this.heroes.length - 1].id + 1;

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(this.heroes);
  }

  addHero(name: string): Promise<Hero> {
    const newHero: Hero = {id: this.nextId++, name};
    this.heroes = [...this.heroes, newHero];
    return Promise.resolve(newHero);
  }

  deleteHero(id: number): Promise<any> {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
    return Promise.resolve();
  }
}

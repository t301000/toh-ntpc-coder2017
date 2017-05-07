import { Component, OnInit } from '@angular/core';

import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero: Hero = null;
  hintWord = 'New Hero\'s name';
  newHeroName = '';

  constructor() { }

  ngOnInit() {
  }

  addHero() {
    const name = this.newHeroName.trim();
    if (! name) {
      return;
    }
    const id = this.heroes[this.heroes.length - 1].id + 1;
    this.heroes.push({id, name});
    this.newHeroName = '';
  }

  deleteHero(hero: Hero) {
    this.heroes = this.heroes.filter(item => item !== hero);
    if (this.selectedHero && this.selectedHero === hero) {
      this.selectedHero = null;
    }
  }

}

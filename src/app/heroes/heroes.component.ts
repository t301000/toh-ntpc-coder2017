import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero = null;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  addHero(name: string) {
    this.heroService.addHero(name)
        .then(hero => this.heroes.push(hero));
  }

  deleteHero(hero: Hero) {
    this.heroService.deleteHero(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(item => item !== hero);
          this.resetSelectedHero(hero);
        });
  }

  private resetSelectedHero(hero: Hero) {
    if (this.selectedHero && this.selectedHero === hero) {
      this.selectedHero = null;
    }
  }

}

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
  errorMessage: string = null;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
        .subscribe(
          heroes => this.heroes = heroes,
          this.showError.bind(this)
        );
  }

  addHero(name: string) {
    this.heroService.addHero(name)
        .subscribe(
          hero => this.heroes.push(hero),
          this.showError.bind(this)
        );
  }

  deleteHero(hero: Hero) {
    this.heroService.deleteHero(hero.id)
        .subscribe(
          () => {
            this.heroes = this.heroes.filter(item => item !== hero);
            this.resetSelectedHero(hero);
          },
          this.showError.bind(this)
        );
  }

  private resetSelectedHero(hero: Hero) {
    if (this.selectedHero && this.selectedHero === hero) {
      this.selectedHero = null;
    }
  }

  private showError(error: string) {
    this.errorMessage = error;
  }

}

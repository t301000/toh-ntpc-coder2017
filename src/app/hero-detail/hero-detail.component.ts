import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.route.params
      .map((params: Params) => +params['id'])
      .switchMap(id => this.heroService.getHero(id))
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

  save() {}

}

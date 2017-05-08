import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  randomHeroes: Hero[] = [];
  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.heroService.getHeroes()
        .subscribe(heroes => this.randomHeroes = heroes.slice(0, 4));
  }

  goDetail(id: number) {
    this.router.navigate(['/heroes', id]);
  }

}

import { Component, Host, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../hero';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  keyword$ = new Subject<string>();
  results$: Observable<Hero[]>;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.results$ = this.keyword$
                        .debounceTime(500)
                        .distinctUntilChanged()
                        .switchMap(
                          keyword => keyword ? this.heroService.searchHero(keyword) : Observable.of<Hero[]>([])
                        ).catch(() => Observable.of<Hero[]>([]));
  }

  search(keyword: string) {
    this.keyword$.next(keyword);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-detail',
  templateUrl: './mini-detail.component.html',
  styleUrls: ['./mini-detail.component.css']
})
export class MiniDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goDetail() {
    this.router.navigate(['/heroes', this.hero.id]);
  }

}

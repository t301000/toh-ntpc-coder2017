import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {
  name = '';
  hintWord = 'New Hero\'s name';
  @Output() createHero = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addHero() {
    const name = this.name.trim();
    if (name) {
      this.createHero.emit(name);
      this.name = '';
    }
  }
}

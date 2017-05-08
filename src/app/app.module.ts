import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MiniDetailComponent } from './mini-detail/mini-detail.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { HeroService } from './hero.service';
import { HeroDB } from './heroes.data';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesComponent,
    MiniDetailComponent,
    NewHeroComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(HeroDB, {delay: 0}), // must after HttpModule, default delay 500ms
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

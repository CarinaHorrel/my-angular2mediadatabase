import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Actor } from './movies/actor';
import { ActorService } from './movies/actor.service';

import { DVD } from './movies/dvd';
import { DVDService } from './movies/dvd.service';

import { Http } from '@angular/http';
import 'rxjs/Rx'; 

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,

  // template: `
  //   <h1>{{title}}</h1>
  //   <h2>My Actors</h2>
  //   <ul class="actors">
  //     <li *ngFor="let actor of actors"
  //       [class.selected]="actor === selectedActor"
  //       (click)="onSelect(actor)">
  //       <span class="badge">{{actor.id}}</span> {{actor.firstName}} {{actor.lastName}}
  //     </li>
  //   </ul>
  //   <actor-detail [actor]="selectedActor"></actor-detail>
  // `,

 // template: `
  //   <h1>{{title}}</h1>
  //   <h2>My DVDs</h2>
  //   <ul class="dvds">
  //     <li *ngFor="let dvd of dvds"
  //       [class.selected]="dvd === selectedDVD"
  //       (click)="onSelect(dvd)">
  //       <span class="badge">{{dvd.id}}</span> {{dvd.title}}
  //     </li>
  //   </ul>
  //   <dvd-detail [dvd]="selectedDVD"></dvd-detail>
  // `,

  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [HeroService]
  // providers: [DVDService, ActorService, Http ]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  // actors: Actor[];
  // selectedActor: Actor;

  // dvds: DVD[];
  // selectedDVD: DVD;

  constructor(private heroService: HeroService) { }
  // constructor(private actorService: ActorService) { }
  // constructor(private dvdService: DVDService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //   getActors(): void {
  //   this.actorService.getActors().then(actors => this.actors = actors);
  // }

  // ngOnInit(): void {
  //   this.actorService.getActors()
  //   .subscribe(
  //     actorData => this.actors = actorData,
  //     err => console.log(err),
  //     () => console.log("Actors ophalen compleet")
  //   )
  // }

  // onSelect(actor: Actor): void {
  //   this.selectedActor = actor;
  // }

  //   getDVDs(): void {
  //   this.dvdService.getDVDs().then(dvds => this.dvds = dvds);
  // }

  // ngOnInit(): void {
  //   this.dvdService.getDVDs()
  //   .subscribe(
  //     dvdData => this.dvds = dvdData,
  //     err => console.log(err),
  //     () => console.log("DVDs ophalen compleet")
  //   )
  // }

  // onSelect(dvd: DVD): void {
  //   this.selectedDVD = dvd;
  // }

}
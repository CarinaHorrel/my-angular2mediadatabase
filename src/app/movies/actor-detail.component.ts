import { Component, Input } from '@angular/core';

import { Actor } from './actor';
@Component({
  selector: 'actor-detail',
  template: `
    <div *ngIf="actor">
      <h2>{{actor.firstName}} {{actor.lastName}} details!</h2>
      <div><label>id: </label>{{actor.id}}</div>
      <div>
        <label>firstname: </label>
        <input [(ngModel)]="actor.firstName" placeholder="firstname"/>
        <label>lastname: </label>
        <input [(ngModel)]="actor.lastName" placeholder="lastname"/>
      </div>
    </div>
  `
})
export class ActorDetailComponent {
  @Input() actor: Actor;
}

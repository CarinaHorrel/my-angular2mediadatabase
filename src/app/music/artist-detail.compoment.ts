import { Component, Input } from '@angular/core';

import { Artist } from './artist';
@Component({
  selector: 'artist-detail',
  template: `
    <div *ngIf="artist">
      <h2>{{artist.artistName}} details!</h2>
      <div><label>id: </label>{{artist.id}}</div>
      <div>
        <label>artistname: </label>
        <input [(ngModel)]="artist.artistName" placeholder="artistname"/>
      </div>
    </div>
  `
})
export class ArtistDetailComponent {
  @Input() artist: Artist;
}

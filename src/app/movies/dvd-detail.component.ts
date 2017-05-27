import { Component, Input } from '@angular/core';

import { DVD } from './dvd';
@Component({
  selector: 'dvd-detail',
  template: `
    <div *ngIf="dvd">
      <h2>{{dvd.title}} details!</h2>
      <div><label>id: </label>{{dvd.id}}</div>
      <div>
        <label>title: </label>
        <input [(ngModel)]="dvd.title" placeholder="title"/>
        <label>year: </label>
        <input [(ngModel)]="dvd.year" placeholder="year"/>
        <label>origin: </label>
        <input [(ngModel)]="dvd.origin" placeholder="origin"/>
        <label>bonus: </label>
        <input [(ngModel)]="dvd.bonus" placeholder="bonus"/>
        <label>remarks: </label>
        <input [(ngModel)]="dvd.remarks" placeholder="remarks"/>
        <label>checked: </label>
        <input [(ngModel)]="dvd.checked" placeholder="checked"/>
      </div>
    </div>
  `
})
export class DVDDetailComponent {
  @Input() dvd: DVD;
}

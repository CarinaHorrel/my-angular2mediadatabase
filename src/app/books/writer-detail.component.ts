import { Component, Input } from '@angular/core';

import { Writer } from './writer';
@Component({
  selector: 'writer-detail',
  template: `
    <div *ngIf="writer">
      <h2>{{writer.firstName}} {{writer.lastName}} details!</h2>
      <div><label>id: </label>{{writer.id}}</div>
      <div>
        <label>firstname: </label>
        <input [(ngModel)]="writer.firstName" placeholder="firstname"/>
        <label>lastname: </label>
        <input [(ngModel)]="writer.lastName" placeholder="lastname"/>
      </div>
    </div>
  `
})
export class WriterDetailComponent {
  @Input() writer: Writer;
}

import { Injectable } from '@angular/core';

import { Actor } from './actor';
import { ACTORS } from './mock-actors';

@Injectable()
export class ActorService {
  getActor(): Promise<Actor[]> {
    return Promise.resolve(ACTORS);
  }
}
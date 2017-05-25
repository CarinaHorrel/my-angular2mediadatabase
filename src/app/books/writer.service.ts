import { Injectable } from '@angular/core';

import { Writer } from './writer';
import { WRITERS } from './mock-writers';

@Injectable()
export class WriterService {
  getWriter(): Promise<Writer[]> {
    return Promise.resolve(WRITERS);
  }
}
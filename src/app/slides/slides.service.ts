import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Slide = { title: string, content: string };

@Injectable()
export class SlidesService {
  slides(): Observable<Slide[]> {
    return Observable.from([
      [
        {
          title: 'sample',
          content: 'body'
        },
        {
          title: 'second',
          content: 'random'
        }
      ]
    ]);
  }
}

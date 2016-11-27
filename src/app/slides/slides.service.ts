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
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequatur corporis cumque dolore esse exercitationem fuga illum incidunt laboriosam laudantium, quisquam ratione unde veniam, voluptatibus. Inventore perspiciatis quidem voluptatibus!'
        },
        {
          title: 'second',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores omnis tempora! Aliquid animi atque, beatae, cupiditate doloribus eaque eius explicabo inventore magnam minus nemo nesciunt nobis rem, soluta tempore?'
        }
      ]
    ]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Slide, SlidesService } from './slides.service';

@Component({
    selector: 'ev-slides',
    templateUrl: 'slides.component.html',
    styleUrls: ['slides.component.css']
})
export class SlidesComponent {
  public slides : Array<Slide> = [];

  constructor(slidesService: SlidesService) {
    slidesService
      .slides()
      .subscribe((slides: Array<Slide>) => {
        this.slides = slides;
      })
  }

}

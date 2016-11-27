import { Component, OnInit } from '@angular/core';
import { Slide, SlidesService } from './slides.service';

@Component({
    selector: 'ev-slides',
    templateUrl: 'slides.component.html',
    styleUrls: ['slides.component.css']
})
export class SlidesComponent {
  public slides : Array<Slide> = [];
  public currentSlide: number = 0;

  constructor(private slidesService: SlidesService) {
    this.slidesService
        .slides()
        .subscribe((slides: Array<Slide>) => {
          this.slides = slides;
        })
  }

  public nextSlide() {
    if(this.currentSlide + 1 == this.slides.length) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }

  public slideInsideClicked(data) {
    alert(data);
  }

}

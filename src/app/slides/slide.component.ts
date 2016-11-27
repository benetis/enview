import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'ev-slide',
    templateUrl: 'slide.component.html',
    styleUrls: ['slide.component.css']
})
export class SlideComponent {
  @Input() title: string = '';
  @Input() content: string = '';

}

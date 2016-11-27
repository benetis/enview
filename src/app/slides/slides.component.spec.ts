import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { SlidesComponent } from './slides.component';
import { SlidesService } from './slides.service';
import { Observable } from 'rxjs';


describe('slides component', () => {
  let fixture;
  let slidesServiceStub;


  beforeEach(() => {
    slidesServiceStub = {
      slides: () => {
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
    };

    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [
        TestSlidesComponent
      ],
      providers: [
        {
          provide: SlidesService,
          useValue: slidesServiceStub
        }
      ]
    });

    fixture = TestBed.createComponent(TestSlidesComponent);

    TestBed.compileComponents();

    fixture.detectChanges();
  });

  describe('text content', () => {
    it(`should load first slide with title "sample"`, () => {
      const slide = fixture.debugElement.query(By.css('.slide-title'));
      expect(slide.nativeElement.textContent).toContain('sample');
    });

    it(`should load first slide with content "body"`, () => {
      const slide = fixture.debugElement.query(By.css('.slide-content'));
      expect(slide.nativeElement.textContent).toContain('body');
    });
  });

  describe('next slide button', () => {
    it('should load a button for choosing next slide', () => {
      const button = fixture.debugElement.query(By.css('.next-slide'));
      expect(button).not.toBeNull();
    });

    it('should switch current slide to next upon clicking it', () => {
      expect(slidesComponent().currentSlide).toBe(0, 'upon initial loading should show first slide');
      nextSlide();
      expect(slidesComponent().currentSlide).toBe(1, 'after clicking next slide - should increase by one');
    });

    it('should set current slide to first if last is currently selected', () => {
      nextSlide();
      expect(slidesComponent().currentSlide).toBe(1, 'last slide should be selected');
      nextSlide();
      expect(slidesComponent().currentSlide).toBe(0, 'should reset');
    });

    function nextSlide() {
      const button = fixture.debugElement.query(By.css('.next-slide'));
      button.nativeElement.dispatchEvent(new Event('click'));

      fixture.detectChanges(); //You can enable auto change detection for tests
    }

    function slidesComponent() : SlidesComponent {
      return fixture.debugElement.query(By.directive(SlidesComponent)).componentInstance;
    }

  });

});

@Component({
  template: `
      <ev-slides
      ></ev-slides>`
})

class TestSlidesComponent {
}

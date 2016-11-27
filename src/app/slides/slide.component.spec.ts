import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import {} from 'jasmine';

describe('slide component', () => {
  let fixture;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [
        TestSlideComponent
      ],
    });

    fixture = TestBed.createComponent(TestSlideComponent);

    TestBed.compileComponents();

    fixture.detectChanges();
  });

  it('should render slide title in "slide-title" div with abc123', () => {
    const slide = fixture.debugElement.query(By.css('.slide-title'));
    expect(slide.nativeElement.textContent).toContain('abc123');
  });

  it('should render slide content in "slide-content" div with "some content"', () => {
    const slide = fixture.debugElement.query(By.css('.slide-content'));
    expect(slide.nativeElement.textContent).toContain('some content');
  });
});

@Component({
  template: `
      <ev-slide
        [title]="'abc123'"
        [content]="'some content'"
      ></ev-slide>`
})

class TestSlideComponent {
}

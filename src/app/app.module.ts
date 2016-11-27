import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { SlidesService } from './slides/slides.service';
import { SlideComponent } from './slides/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    SlidesComponent,
    SlideComponent
  ],
  providers: [SlidesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

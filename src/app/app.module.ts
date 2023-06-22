import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { CategoryComponent } from './components/category/category.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { VideoComponent } from './components/video/video.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HighlightComponent,
    CategoryComponent,
    NewsletterComponent,
    VideoComponent,
    FooterComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


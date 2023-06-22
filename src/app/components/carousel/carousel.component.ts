import { Component, OnInit } from '@angular/core';
import { SlideInterface } from 'src/app/imageSlider/types/slide.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides: SlideInterface[] = [
    { url: '../../../assets/img/Slide.svg', title: 'Slide 1' },
    { url: '../../../assets/img/Slide-1.jpg', title: 'Slide 2' },
    { url: '../../../assets/img/Slide-2.jpg', title: 'Slide 3' },
    { url: '../../../assets/img/Slide.svg', title: 'Slide 4' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

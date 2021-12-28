import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper,{Autoplay} from 'swiper';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit, AfterViewInit {

  swiper:Swiper

  icons = [
    "./../../../../assets/stack.png",
  "./../../../../assets/angularLogo.png",
  "./../../../../assets/typeLogo.png",
  "./../../../../assets/sa.png",
  "./../../../../assets/ionicLogo.png",
  "./../../../../assets/nodejsLogo.png",
  "./../../../../assets/gitLogo.png",
  "./../../../../assets/bootstrapLogo.png"
]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Swiper.use([Autoplay]);
    this.swiper = new Swiper ('.swiper-container', {
      loop: true,
      autoplay: {
        delay:1000,
        disableOnInteraction:false},
      slidesPerView: 1,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },}
    });
  }
}

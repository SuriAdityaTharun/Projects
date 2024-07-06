import { Component } from '@angular/core';
import { homeCarouselData } from '../../../Data/maincarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.css'
})
export class MainCarouselComponent {
  carouselData: any;

  currentSlide=0;
  interval:any;
  
  ngOnInit(){
    this.carouselData=homeCarouselData;
    this.autoplay()
  }
  autoplay(){
    setInterval(()=>{
      this.nextSlide();
    },2000)
  }

  nextSlide(){
    this.currentSlide= (this.currentSlide+1) % this.carouselData.length;
  }
}

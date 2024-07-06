import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent {
@Input() title:any
@Input() products:any

slideIn = false;

  ngOnInit() {
    // Trigger the slide-in effect after a delay or based on some event
    setTimeout(() => {
      this.slideIn = true;
    }, 500); // Adjust the delay as needed
  }

}

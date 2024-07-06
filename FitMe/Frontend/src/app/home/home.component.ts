import { Component } from '@angular/core';
import { products } from '../../Data/products/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  GYMproducts:any;
  
  ngOnInit(){
    this.GYMproducts= products.slice(0,9);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products=[
  {name:"Samsung",price:56000},
  {name:"Xiaomi",price:26000},
  {name:"I-Phone",price:46000},
  {name:"Lenovo",price:38000}
];
}

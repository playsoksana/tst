import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
})
export class CardsContainerComponent implements OnInit {
  
  products: any = [
    {
      id: 1,
      name: 'product 1',
      price: 110,
      description: 'product1 text description',
      color: 'red'
    },
    {
      id: 2,
      name: 'product 2',
      price: 120,
      description: 'product2 text description',
      color: 'blue'
    },
    {
      id: 3,
      name: 'product 3',
      price: 130,
      description: 'product3 text description',
      color: 'green'
    },
  ];

  showDescription: boolean = false;
  discountProduct: any = this.products;

  changeShowDescription() {
    this.showDescription = !this.showDescription;
  }
  constructor() {}

  ngOnInit(): void {}

  discountPrice() {
    this.discountProduct = this.products.map((prod: any) => ({
      ...prod,
      price: prod.price - 15,
    }));
  }
}

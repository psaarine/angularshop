import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.sass']
})
export class ShopInfoComponent implements OnInit, DoCheck {

  constructor() { }
  @Input()items;
  public price:number;

  ngOnInit(): void {
    this.calculatePrice()
  }

  ngDoCheck(): void {

  }

  calculatePrice(): number {
    let itemCount:number = 0;
    this.items.forEach(element => {
      itemCount = itemCount + (element[1] * element[0].price);
    });
    this.price = itemCount;
    return this.price;
  }

  setPrice(price:number):void {
    this.price = price;
  }
}

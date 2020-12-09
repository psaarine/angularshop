import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit, OnDestroy {

  constructor() { }
  public shop:any;
  public identifier = "maincomponent";


  ngOnInit(): void {
    this.getShop();
  }
  ngOnDestroy(): void {
    let updShop: any =  {};
    this.shop.forEach(element => {
      console.log(element);
      updShop[element[0].id] = [element[0], element[1]];
    });
    sessionStorage.setItem("shop", JSON.stringify(updShop));
  }

  getShop():void {
    let storage = JSON.parse(sessionStorage.getItem("shop"));
    this.shop = Object.values(storage);
    console.log(storage)
  }

  handleChange(e:any):void{
    this.shop = e;
  }
  resetShop(): void {
    sessionStorage.removeItem("shop");
  }

}

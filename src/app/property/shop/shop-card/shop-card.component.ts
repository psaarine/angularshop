import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.sass']
})
export class ShopCardComponent implements OnInit {

  @Input()data:any;
  @Input()index:number;
  @Input()currentShop:any;
  @Output()public shopFunction = new EventEmitter();
  public colors = {
    common: "#6b6b6b",
    uncommon: "#319236",
    rare: "#4c51f7",
    epic: "#9d4dbb",
    legendary: "#f3af19",
    mythic: "#f3af19",
    marvel: "#6b6b6b"
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  incrementItem():void {
    let listItem = this.currentShop[this.index];
    let amount = listItem[1];
    amount++;
    let newShop = this.currentShop
    newShop[this.index] = [listItem[0], amount];
    this.updateSessionStorage(listItem[0], amount);
    this.shopFunction.emit(newShop);
  }

  decrementItem():void {
    let listItem = this.currentShop[this.index];
    let amount = listItem[1];
    if (amount > 1){
      amount--;
    }
    let newShop = this.currentShop;
    newShop[this.index] = [listItem[0], amount];
    this.updateSessionStorage(listItem[0], amount);
    this.shopFunction.emit(newShop);
  }

  updateSessionStorage(update:any, amount:number ){
    let storage = JSON.parse(sessionStorage.getItem("shop"));
    storage[update.id] = [update, amount];
    sessionStorage.setItem("shop", JSON.stringify(storage));
  }

}

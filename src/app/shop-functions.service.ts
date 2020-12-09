import { Injectable } from '@angular/core';
import * as alertify from "alertifyjs";

@Injectable({
  providedIn: 'root'
})
export class ShopFunctionsService {

  constructor() { }

  addToShop(itemData:any):void{
    let storage:any = sessionStorage.getItem("shop");
    if (storage === null) {
      sessionStorage.setItem("shop", JSON.stringify({}));
      storage = sessionStorage.getItem("shop");
    }
    storage = <Object>JSON.parse(storage);
    if (itemData.id in storage) {
      let idList = storage[itemData.id][1];
      idList++;
      storage[itemData.id] = [itemData, idList];
      sessionStorage.setItem("shop", JSON.stringify(storage));
      alertify.success("Item added");
    } else {
      storage[itemData.id] = [itemData, 1];
      alertify.success("Item added");
      sessionStorage.setItem("shop", JSON.stringify(storage));
    }
    console.log(storage);
  }
}

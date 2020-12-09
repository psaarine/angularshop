import { Component, Input, OnInit } from '@angular/core';
import * as alertify from "alertifyjs"

@Component({
  selector: 'app-property-card',
  templateUrl: "property-card.component.html",
  styleUrls: ["property-card.component.sass"]
})
export class PropertyCardComponent implements OnInit{
  @Input()itemData: any

  public colors = {
    common: "#6b6b6b",
    uncommon: "#319236",
    rare: "#4c51f7",
    epic: "#9d4dbb",
    legendary: "#f3af19",
    mythic: "#f3af19",
    marvel: "#6b6b6b"
  }

  currentAmount:number = 0;

  ngOnInit(): void {
    this.setAmount();
  }

  addToShop():void{
    let storage:any = sessionStorage.getItem("shop");

    if (storage == "undefined" || storage == null) {
      sessionStorage.setItem("shop", JSON.stringify({}));
      storage = sessionStorage.getItem("shop");
    }

    storage = <Object>JSON.parse(storage);

    if (this.itemData.id in storage) {
      let idList = storage[this.itemData.id][1];
      idList++;
      this.currentAmount = idList;
      storage[this.itemData.id] = [this.itemData, idList];
      sessionStorage.setItem("shop", JSON.stringify(storage));
      alertify.success("Item added");
    } else {
      storage[this.itemData.id] = [this.itemData, 1];
      this.currentAmount = 1;
      alertify.success("Item added");
      sessionStorage.setItem("shop", JSON.stringify(storage));
    }
  }

  removeFromShop():void {
    let storage:any = sessionStorage.getItem("shop");

    if (storage == "undefined" || storage == null) {
      sessionStorage.setItem("shop", JSON.stringify({}));
      storage = sessionStorage.getItem("shop");
    }

    storage = <Object>JSON.parse(storage);

    if (this.itemData.id in storage) {
      let idList = storage[this.itemData.id][1];
      if (idList > 0){
        idList--;
        this.currentAmount = idList;
      }

      storage[this.itemData.id] = [this.itemData, idList];
      sessionStorage.setItem("shop", JSON.stringify(storage));
      alertify.success("Item removed");
    } else {
      storage[this.itemData.id] = [this.itemData, 1];
      alertify.success("Item removed");
      sessionStorage.setItem("shop", JSON.stringify(storage));
    }
  }
  setAmount():void{
    let storage = sessionStorage.getItem("shop");

    if (storage !== null && storage !== undefined) {
      storage = JSON.parse(storage);
      if (storage[this.itemData.id] !== undefined){

        let amount = storage[this.itemData.id][1];
        let integer = parseInt(amount);
        this.currentAmount = integer;
      }

    }
  }
}

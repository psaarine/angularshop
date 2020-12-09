import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.sass']
})
export class PropertyListComponent implements OnInit {

  constructor(private _itemService: ItemService) { }
  public items:Array<any>;
  private chunkSize:number = 21;
  public itemChunk:Array<any>;
  public currentIndex:number = 0;
  myForm: FormGroup;
  public rarities:string[] = ["uncommon","rare","epic", "mythic"];
  filterString:string = "";

  ngOnInit(): void {
    this._itemService.getItems().subscribe(data => this.setItems(data));
  }
  setItems(data:any):void{
    this.items = data.items.pickaxe;
    this.setChunk(this.items, this.currentIndex);
  }
  setChunk(itemArray:Array<any>, index:number){
    this.itemChunk = itemArray.slice(index * this.chunkSize, this.currentIndex * this.chunkSize + this.chunkSize);
  }

  setFilter(rarity:string){
    this.filterString = rarity;
    console.log(rarity)
  }
}

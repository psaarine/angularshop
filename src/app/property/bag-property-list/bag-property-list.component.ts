import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-bag-property-list',
  templateUrl: './bag-property-list.component.html',
  styleUrls: ['./bag-property-list.component.sass']
})
export class BagPropertyListComponent implements OnInit {

  constructor(private _itemService: ItemService) { }
  public bags:Array<any>;
  public bagChunk:Array<any>;
  private chunkSize:number = 21;
  public index:number = 0;

  ngOnInit(): void {
    this._itemService.getItems().subscribe(data => this.setBags(data));
  }

  setBags(data:any): void {
    this.bags = data.items.backpack;
    this.setChunk(this.bags, this.index);
  }

  setChunk(data: Array<any>, currentIndex:number): void {
    this.bagChunk = data.slice(currentIndex * this.chunkSize, currentIndex * this.chunkSize + this.chunkSize);
    console.log(this.bagChunk);
  }
}

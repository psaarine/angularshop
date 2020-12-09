import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  constructor(private _itemService: ItemService) { }
  itemData:any;
  images: GalleryItem[];
  currentItemData:any;
  infoData:any = {
    name: "",
    description: "",
    rarity: ""
  };

  public colors = {
    common: "#6b6b6b",
    uncommon: "#319236",
    rare: "#4c51f7",
    epic: "#9d4dbb",
    legendary: "#f3af19",
    mythic: "#f3af19",
    marvel: "#6b6b6b"
  }

  ngOnInit(): void {
    this._itemService.getUpcoming().subscribe(data => {this.setImages(data)})
  }
  setImages(data:any): void{
    let imageList:Array<any> = data.items.slice(0, 10);
    this.infoData = imageList[0];
    this.itemData = imageList;
    let imageItem:ImageItem;
    let dataList: GalleryItem[] = [];
    imageList.forEach(element => {
      imageItem = new ImageItem({src: element.images.full_background, thumb: element.images.icon})
      dataList.push(imageItem);
    });
    this.images = dataList;
  }

  handleIndex(e:any):void{
    this.infoData = this.itemData[e.currIndex];
  }

}

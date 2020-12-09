import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly ROOT_URL: string = "https://fortniteapi.io/v1/items/list?lang=en";
  readonly UPCOMING_URL: string = " https://fortniteapi.io/v1/items/upcoming?lang=en";
  readonly MAP_URL = "https://fortniteapi.io/v1/maps/list";
  public axes: any[];
  public bags: any[];
  private itemChunk:number = 21;
  public test:string = "toimii!";
  private headers = new HttpHeaders(
    {
      "Authorization": "5d75b091-52939b7e-e716f9aa-489b1f2d"
    }
  );
  constructor(private http: HttpClient) { }

  setShop(data: any){
    this.axes = data.items.pickaxe.slice(0, this.itemChunk);
    this.bags = data.items.backpack.slice(0, this.itemChunk);
  }

  getItems(){
    return this.http.get(this.ROOT_URL, {headers:this.headers});
  }
  getUpcoming(){
    return this.http.get(this.UPCOMING_URL, {headers: this.headers});
  }
  getMap(){
    return this.http.get(this.MAP_URL, {headers: this.headers});
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  readonly ROOT_URL: string = "https://fortniteapi.io/v1/items/list?lang=en";
  public posts: any;
  public axes: any[];
  public bags: any[];
  private itemChunk:number = 21
  private headers = new HttpHeaders(
    {
      "Authorization": "5d75b091-52939b7e-e716f9aa-489b1f2d"
    }
  );



  constructor(private http: HttpClient) {

  }

}

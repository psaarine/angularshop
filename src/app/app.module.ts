import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavbarComponent } from './navbar/navbar.component'

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { BagPropertyListComponent } from './property/bag-property-list/bag-property-list.component';
import { ItemService } from './item.service';
import { IndexComponent } from './property/index/index.component';
import { ShopComponent } from './property/shop/shop.component';
import { FormsModule } from "@angular/forms";
import { ShopCardComponent } from './property/shop/shop-card/shop-card.component';
import { ShopInfoComponent } from './property/shop/shop-info/shop-info.component';
import { GalleryModule } from 'ng-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavbarComponent,
    BagPropertyListComponent,
    IndexComponent,
    ShopComponent,
    ShopCardComponent,
    ShopInfoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    GalleryModule,
    BrowserAnimationsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

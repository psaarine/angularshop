import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagPropertyListComponent } from './property/bag-property-list/bag-property-list.component';
import { IndexComponent } from './property/index/index.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { ShopComponent } from './property/shop/shop.component';


const routes: Routes = [
  { path: "axes", component: PropertyListComponent },
  { path: "bags", component: BagPropertyListComponent },
  { path: "", component: IndexComponent },
  { path: "shop", component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

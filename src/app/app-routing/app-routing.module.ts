import { ProductItemComponent } from './../product/product-item/product-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ShopComponent } from '../shop/shop.component';
import { ProductSingleComponent } from '../product-single/product-single.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
{ path: '', redirectTo: 'shop', pathMatch: 'full' },
{
  path: '',
 component: LayoutComponent,
 children: [
   { path: 'shop', component: ShopComponent },
   { path: 'product', component: ProductSingleComponent },
   { path: 'contact', component: ContactComponent }
 ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

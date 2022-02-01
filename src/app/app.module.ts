import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { PageMenuComponent } from './header/page-menu/page-menu.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ViewedComponent } from './viewed/viewed.component';
import { BrandsComponent } from './brands/brands.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ShopSidebarComponent } from './shop/shop-sidebar/shop-sidebar.component';
import { ShopContentComponent } from './shop/shop-content/shop-content.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    HeaderMainComponent,
    MainNavComponent,
    PageMenuComponent,
    HomeComponent,
    ShopComponent,
    ViewedComponent,
    BrandsComponent,
    NewsletterComponent,
    FooterComponent,
    CopyrightComponent,
    ShopSidebarComponent,
    ShopContentComponent,
    ProductItemComponent,
    ProductSingleComponent,
    LayoutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

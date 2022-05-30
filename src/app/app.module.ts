import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { AdminComponent } from './layouts/admin/admin.component';
import { WebsiteComponent } from './layouts/website/website.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboarchComponent } from './pages/dashboarch/dashboarch.component';
import { NavagitionComponent } from './layouts/admin/navagition/navagition.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { BannerComponent } from './components/banner/banner.component';
import { CasualComponent } from './components/casual/casual.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';


registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,

    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    NotFoundComponent,
   
    AdminComponent,
    WebsiteComponent,
    HomeComponent,
    DashboarchComponent,
    NavagitionComponent,
    TableDataComponent,
    BannerComponent,
    CasualComponent,
    HeroComponent,
    ProductGridComponent,
    BestSellerComponent,
    FaqComponent,
    FooterComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzTableModule
   
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],

})
export class AppModule {}

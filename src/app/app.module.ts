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
import { LayoutsComponent } from './layouts/layouts.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { WebsiteComponent } from './layouts/website/website.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboarchComponent } from './pages/dashboarch/dashboarch.component';


registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,

    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    NotFoundComponent,
    LayoutsComponent,
    AdminComponent,
    WebsiteComponent,
    HomeComponent,
    DashboarchComponent,
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

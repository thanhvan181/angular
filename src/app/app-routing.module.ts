import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { WebsiteComponent } from './layouts/website/website.component';
import { DashboarchComponent } from './pages/dashboarch/dashboarch.component';
import { HomeComponent } from './pages/home/home.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  
 
  {path: "admin", component: AdminComponent , children: [
    { path: "", component: DashboarchComponent  },
    { path: 'product', component: TableDataComponent },
    { path: "product/add", component: ProductAddComponent },
    { path: "product/:id", component: ProductDetailComponent },
    { path: "product/edit/:id", component: ProductAddComponent },

  ]},
  {path: "", component: WebsiteComponent , children: [
    { path: "home", component: HomeComponent },
    // { path: 'product', component: ProductsComponent },
    // { path: "product/add", component: ProductAddComponent },
    // { path: "product/:id", component: ProductDetailComponent },
    // { path: "product/edit/:id", component: ProductAddComponent },

  ]},
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

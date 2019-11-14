import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeadComponent} from './head/head.component';
import {TodoComponent} from './todo/todo.component';
import {ProductsComponent} from './products/products.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'products/create', component: ProductAddComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

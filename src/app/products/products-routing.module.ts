import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductAddComponent} from './product-create/product-add.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent,
    children: [
      {path: 'create', component: ProductAddComponent},
      {path: ':id/update', component: ProductEditComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

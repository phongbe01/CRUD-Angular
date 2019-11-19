import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import {ProductAddComponent} from './product-create/product-add.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductsComponent} from './products.component';
import {RatingComponent} from '../rating/rating.component';


@NgModule({
  declarations: [
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductsComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent
  ]
})
export class ProductsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { TopHeaderComponent } from './head/top-header/top-header.component';
import { BottomHeaderComponent } from './head/bottom-header/bottom-header.component';
import { BodyComponent } from './body/body.component';
import { TodoComponent } from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductAddComponent } from './products/product-create/product-add.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BodyModule } from './body/body.module';
import { ProductsModule } from './products/products.module';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './auth/account/account.module';
import {AuthRoutingModule} from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    BodyComponent,
    TodoComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BodyModule,
    ProductsModule,
    AccountModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';
import {AuthComponent} from './auth/auth.component';
import {MainContainerComponent} from './body/main-container/main-container.component';
import {AccountComponent} from './auth/account/account.component';


const routes: Routes = [
  {path: 'products/shirt', component: MainContainerComponent},
  {path: 'customer/account', component: AccountComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

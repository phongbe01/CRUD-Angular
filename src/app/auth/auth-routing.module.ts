import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountComponent} from './account/account.component';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {AccountDetailComponent} from './account/account-detail/account-detail.component';



const routes: Routes = [
  {
    path: 'customer/account',
    component: AuthComponent,
    children: [
      {path: 'login', component: AuthComponent},
      {path: 'detail', component: AccountComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

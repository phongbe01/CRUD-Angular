import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import {AccountDetailComponent} from './account/account-detail/account-detail.component';


@NgModule({
  declarations: [RegisterComponent, AccountComponent, AccountComponent],
  exports: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

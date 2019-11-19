import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body-routing.module';
import {BlockSlideComponent} from './block-slide/block-slide.component';
import {BlockBannerComponent} from './block-banner/block-banner.component';
import { BlockProductSaleComponent } from './block-product-sale/block-product-sale.component';
import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
  declarations: [
    BlockSlideComponent,
    BlockBannerComponent,
    BlockProductSaleComponent,
    MainContainerComponent
  ],
  exports: [
    BlockSlideComponent,
    BlockBannerComponent,
    BlockProductSaleComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
  ]
})
export class BodyModule { }

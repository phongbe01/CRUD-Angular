import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockProductSaleComponent } from './block-product-sale.component';

describe('BlockProductSaleComponent', () => {
  let component: BlockProductSaleComponent;
  let fixture: ComponentFixture<BlockProductSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockProductSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockProductSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

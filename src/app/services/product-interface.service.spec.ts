import { TestBed } from '@angular/core/testing';

import { ProductInterfaceService } from './product-interface.service';

describe('ProductInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductInterfaceService = TestBed.get(ProductInterfaceService);
    expect(service).toBeTruthy();
  });
});

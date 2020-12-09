import { TestBed } from '@angular/core/testing';

import { ShopFunctionsService } from './shop-functions.service';

describe('ShopFunctionsService', () => {
  let service: ShopFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

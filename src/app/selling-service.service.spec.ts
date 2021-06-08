import { TestBed } from '@angular/core/testing';

import { SellingServiceService } from './selling-service.service';

describe('SellingServiceService', () => {
  let service: SellingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

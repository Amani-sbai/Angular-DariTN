import { TestBed } from '@angular/core/testing';

import { RentingServiceService } from './renting-service.service';

describe('RentingServiceService', () => {
  let service: RentingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

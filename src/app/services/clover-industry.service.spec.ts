import { TestBed } from '@angular/core/testing';

import { CloverIndustryService } from './clover-industry.service';

describe('CloverIndustryService', () => {
  let service: CloverIndustryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloverIndustryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

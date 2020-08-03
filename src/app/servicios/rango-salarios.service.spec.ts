import { TestBed } from '@angular/core/testing';

import { RangoSalariosService } from './rango-salarios.service';

describe('RangoSalariosService', () => {
  let service: RangoSalariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangoSalariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GeoAndForecastService } from './geo-and-forecast.service';

describe('GeoAndForecastService', () => {
  let service: GeoAndForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoAndForecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

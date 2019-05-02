import { TestBed } from '@angular/core/testing';

import { HomeEventService } from './home-event.service';

describe('HomeEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeEventService = TestBed.get(HomeEventService);
    expect(service).toBeTruthy();
  });
});

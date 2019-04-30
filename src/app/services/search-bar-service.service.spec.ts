import { TestBed } from '@angular/core/testing';

import { SearchBarServiceService } from './search-bar-service.service';

describe('SearchBarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchBarServiceService = TestBed.get(SearchBarServiceService);
    expect(service).toBeTruthy();
  });
});

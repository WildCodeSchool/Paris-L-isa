import { TestBed } from '@angular/core/testing';

import { GapiTestService } from './gapi-test.service';

describe('GapiTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GapiTestService = TestBed.get(GapiTestService);
    expect(service).toBeTruthy();
  });
});

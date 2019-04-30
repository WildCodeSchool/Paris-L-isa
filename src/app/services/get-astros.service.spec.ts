import { TestBed } from '@angular/core/testing';

import { GetAstrosService } from './get-astros.service';

describe('GetAstrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAstrosService = TestBed.get(GetAstrosService);
    expect(service).toBeTruthy();
  });
});

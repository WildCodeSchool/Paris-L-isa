import { TestBed } from '@angular/core/testing';

import { GoogleCalendarDataService } from './google-calendar-data.service';

describe('GoogleCalendarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleCalendarDataService = TestBed.get(GoogleCalendarDataService);
    expect(service).toBeTruthy();
  });
});

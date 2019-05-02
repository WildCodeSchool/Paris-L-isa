import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBoConferenceComponent } from './event-bo-conference.component';

describe('EventBoConferenceComponent', () => {
  let component: EventBoConferenceComponent;
  let fixture: ComponentFixture<EventBoConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBoConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBoConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

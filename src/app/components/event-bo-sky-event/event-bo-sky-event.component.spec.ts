import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBoSkyEventComponent } from './event-bo-sky-event.component';

describe('EventBoSkyEventComponent', () => {
  let component: EventBoSkyEventComponent;
  let fixture: ComponentFixture<EventBoSkyEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBoSkyEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBoSkyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

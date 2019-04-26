import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageEventBoComponent } from './home-page-event-bo.component';

describe('HomePageEventBoComponent', () => {
  let component: HomePageEventBoComponent;
  let fixture: ComponentFixture<HomePageEventBoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageEventBoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageEventBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

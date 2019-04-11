import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsMenuComponent } from './months-menu.component';

describe('MonthsMenuComponent', () => {
  let component: MonthsMenuComponent;
  let fixture: ComponentFixture<MonthsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

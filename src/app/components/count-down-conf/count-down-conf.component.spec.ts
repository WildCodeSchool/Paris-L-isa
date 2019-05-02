import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownConfComponent } from './count-down-conf.component';

describe('CountDownConfComponent', () => {
  let component: CountDownConfComponent;
  let fixture: ComponentFixture<CountDownConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCountdownComponent } from './tabs-countdown.component';

describe('TabsCountdownComponent', () => {
  let component: TabsCountdownComponent;
  let fixture: ComponentFixture<TabsCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

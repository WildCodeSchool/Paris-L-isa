import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsHistoryScienceComponent } from './tabs-history-science.component';

describe('TabsHistoryScienceComponent', () => {
  let component: TabsHistoryScienceComponent;
  let fixture: ComponentFixture<TabsHistoryScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsHistoryScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsHistoryScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

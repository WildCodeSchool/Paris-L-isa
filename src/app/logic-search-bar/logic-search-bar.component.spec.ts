import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicSearchBarComponent } from './logic-search-bar.component';

describe('LogicSearchBarComponent', () => {
  let component: LogicSearchBarComponent;
  let fixture: ComponentFixture<LogicSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

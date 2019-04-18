import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObsComponent } from './list-obs.component';

describe('ListObsComponent', () => {
  let component: ListObsComponent;
  let fixture: ComponentFixture<ListObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

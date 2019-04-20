import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaBOComponent } from './agenda-bo.component';

describe('AgendaBOComponent', () => {
  let component: AgendaBOComponent;
  let fixture: ComponentFixture<AgendaBOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaBOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

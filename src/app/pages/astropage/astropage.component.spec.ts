import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstropageComponent } from './astropage.component';

describe('AstropageComponent', () => {
  let component: AstropageComponent;
  let fixture: ComponentFixture<AstropageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

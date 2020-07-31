import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangoSalariosComponent } from './rango-salarios.component';

describe('RangoSalariosComponent', () => {
  let component: RangoSalariosComponent;
  let fixture: ComponentFixture<RangoSalariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangoSalariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangoSalariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

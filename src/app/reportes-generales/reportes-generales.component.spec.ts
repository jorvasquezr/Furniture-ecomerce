import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesGeneralesComponent } from './reportes-generales.component';

describe('ReportesGeneralesComponent', () => {
  let component: ReportesGeneralesComponent;
  let fixture: ComponentFixture<ReportesGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmpleadosComponent } from './ver-empleados.component';

describe('VerEmpleadosComponent', () => {
  let component: VerEmpleadosComponent;
  let fixture: ComponentFixture<VerEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

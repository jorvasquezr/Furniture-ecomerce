import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCarritoComponent } from './empleado-carrito.component';

describe('EmpleadoCarritoComponent', () => {
  let component: EmpleadoCarritoComponent;
  let fixture: ComponentFixture<EmpleadoCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

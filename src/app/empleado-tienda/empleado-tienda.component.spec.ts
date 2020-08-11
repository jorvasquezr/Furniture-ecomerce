import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoTiendaComponent } from './empleado-tienda.component';

describe('EmpleadoTiendaComponent', () => {
  let component: EmpleadoTiendaComponent;
  let fixture: ComponentFixture<EmpleadoTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

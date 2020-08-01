import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEmpleadoComponent } from './vista-empleado.component';

describe('VistaEmpleadoComponent', () => {
  let component: VistaEmpleadoComponent;
  let fixture: ComponentFixture<VistaEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

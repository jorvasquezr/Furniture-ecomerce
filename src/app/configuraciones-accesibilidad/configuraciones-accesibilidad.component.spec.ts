import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesAccesibilidadComponent } from './configuraciones-accesibilidad.component';

describe('ConfiguracionesAccesibilidadComponent', () => {
  let component: ConfiguracionesAccesibilidadComponent;
  let fixture: ComponentFixture<ConfiguracionesAccesibilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionesAccesibilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionesAccesibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

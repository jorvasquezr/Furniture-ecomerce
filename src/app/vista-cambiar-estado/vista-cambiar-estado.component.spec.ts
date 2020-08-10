import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCambiarEstadoComponent } from './vista-cambiar-estado.component';

describe('VistaCambiarEstadoComponent', () => {
  let component: VistaCambiarEstadoComponent;
  let fixture: ComponentFixture<VistaCambiarEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCambiarEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCambiarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

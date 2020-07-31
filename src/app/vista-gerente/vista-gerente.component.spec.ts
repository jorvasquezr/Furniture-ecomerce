import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGerenteComponent } from './vista-gerente.component';

describe('VistaGerenteComponent', () => {
  let component: VistaGerenteComponent;
  let fixture: ComponentFixture<VistaGerenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaGerenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

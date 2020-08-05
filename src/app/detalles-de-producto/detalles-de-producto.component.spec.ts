import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDeProductoComponent } from './detalles-de-producto.component';

describe('DetallesDeProductoComponent', () => {
  let component: DetallesDeProductoComponent;
  let fixture: ComponentFixture<DetallesDeProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesDeProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesDeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

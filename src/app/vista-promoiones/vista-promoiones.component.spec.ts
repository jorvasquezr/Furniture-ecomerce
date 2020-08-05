import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPromoionesComponent } from './vista-promoiones.component';

describe('VistaPromoionesComponent', () => {
  let component: VistaPromoionesComponent;
  let fixture: ComponentFixture<VistaPromoionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPromoionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPromoionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

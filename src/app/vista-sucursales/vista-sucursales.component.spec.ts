import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSucursalesComponent } from './vista-sucursales.component';

describe('VistaSucursalesComponent', () => {
  let component: VistaSucursalesComponent;
  let fixture: ComponentFixture<VistaSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

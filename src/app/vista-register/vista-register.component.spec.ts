import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRegisterComponent } from './vista-register.component';

describe('VistaRegisterComponent', () => {
  let component: VistaRegisterComponent;
  let fixture: ComponentFixture<VistaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

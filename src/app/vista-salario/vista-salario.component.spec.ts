import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSalarioComponent } from './vista-salario.component';

describe('VistaSalarioComponent', () => {
  let component: VistaSalarioComponent;
  let fixture: ComponentFixture<VistaSalarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSalarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

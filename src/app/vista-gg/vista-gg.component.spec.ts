import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGGComponent } from './vista-gg.component';

describe('VistaGGComponent', () => {
  let component: VistaGGComponent;
  let fixture: ComponentFixture<VistaGGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaGGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaGGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

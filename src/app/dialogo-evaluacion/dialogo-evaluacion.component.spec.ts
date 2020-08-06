import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEvaluacionComponent } from './dialogo-evaluacion.component';

describe('DialogoEvaluacionComponent', () => {
  let component: DialogoEvaluacionComponent;
  let fixture: ComponentFixture<DialogoEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

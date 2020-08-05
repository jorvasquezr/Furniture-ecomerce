import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouserlImageComponent } from './carouserl-image.component';

describe('CarouserlImageComponent', () => {
  let component: CarouserlImageComponent;
  let fixture: ComponentFixture<CarouserlImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouserlImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouserlImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

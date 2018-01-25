import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListRouteComponent } from './training-list-route.component';

describe('TrainingListRouteComponent', () => {
  let component: TrainingListRouteComponent;
  let fixture: ComponentFixture<TrainingListRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingListRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

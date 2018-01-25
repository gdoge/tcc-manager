import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsDetailsRouteComponent } from './trainings-details-route.component';

xdescribe('TrainingsDetailsRouteComponent', () => {
  let component: TrainingsDetailsRouteComponent;
  let fixture: ComponentFixture<TrainingsDetailsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsDetailsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsDetailsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

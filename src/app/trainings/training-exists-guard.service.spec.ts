import { TestBed, inject } from '@angular/core/testing';

import { TrainingExistsGuardService } from './training-exists-guard.service';

xdescribe('TrainingExistsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingExistsGuardService]
    });
  });

  it('should be created', inject([TrainingExistsGuardService], (service: TrainingExistsGuardService) => {
    expect(service).toBeTruthy();
  }));
});

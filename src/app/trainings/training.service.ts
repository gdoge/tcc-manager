import { Injectable } from '@angular/core';
import { Training } from './training.model';
import { mockTrainings } from './training.mock';

@Injectable()
export class TrainingService {

  constructor() { }

  getAll():Training[] {
    return mockTrainings;
  }

}

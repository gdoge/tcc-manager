import { Injectable } from '@angular/core';
import { Training } from './training.model';
import { TRAININGS } from './training.mock';
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrainingService {

subject:ReplaySubject<Training[]>;

  constructor() { 
    this.subject = new ReplaySubject<Training[]>(1);
    this.subject.next(TRAININGS)
  }

  getAll():Observable<Training[]> {
      return this.subject.asObservable();
  }
}
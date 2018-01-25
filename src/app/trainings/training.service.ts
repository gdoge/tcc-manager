import { Injectable } from '@angular/core';
import { Training } from './training.model';
import { TRAININGS } from './training.mock';
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators'


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

  getById(id: number):Observable<Training> {
   return this.getAll() //>>observable <Training[]>
    .pipe(
      map((trainings: Training[])=>{
        const trainingFound = trainings.find(training => training.id === id);
        if(trainingFound === undefined){
          throw new Error(`Couldn't find Training with the id ${id}`)
        }
      return trainingFound;        
      })
    );
  }
}
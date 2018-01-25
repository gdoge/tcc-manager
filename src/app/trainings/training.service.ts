import { Injectable } from '@angular/core';
import { Training } from './training.model';
import { TRAININGS } from './training.mock';
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { map, first } from 'rxjs/operators';
import { isFuture, startOfDay, compareAsc } from 'date-fns';
import { HttpClient } from '@angular/common/http';

interface TrainingsResponse {
  data: Training[];
}

@Injectable()
export class TrainingService {
  private subject: Subject<Training[]> = new ReplaySubject<Training[]>(1);
// subject: ReplaySubject<Training[]>;
private cached: boolean = false;
  constructor(private httpClient:HttpClient) { 
    // this.subject = new ReplaySubject<Training[]>(1);
    // this.subject.next(TRAININGS)
  }

  getAll():Observable<Training[]> {
    if (!this.cached) {
      this.load();
      this.cached = true;
    }
    return this.subject.asObservable();
  }

  load() {
    this.httpClient.get<TrainingsResponse>('api/training')
      .pipe(map(response => response.data))
      .subscribe(trainings => {
        console.log("HTTP CALL", trainings)
        this.subject.next(trainings)})
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

  update(id: number, updates: Partial<Training>): any {
    this.getAll().pipe(
      first(),
      map((trainings: Training[]) => trainings.map(
        (orgTraining:Training) => {
          console.log("training one" , orgTraining);
          if(orgTraining.id === id){
            return {...orgTraining, ...updates}
          }else{
            return orgTraining;
          }
        }
      ))
    ).subscribe((updatedTrainings:Training[]) => this.subject.next(updatedTrainings))
  }

  getNext():Observable<Training>{
    return this.getAll().pipe(
      map((trainings) => trainings.filter(nextRunInFuture)),
      map((trainings) => trainings.sort(ascSortNextRun)),
      map((trainings) => trainings.length > 0 ? trainings[0]: undefined)
    )
  }
}
  function ascSortNextRun(t1:Training, t2:Training){
    return compareAsc(t1.nextRun, t2.nextRun);
  }

  function nextRunInFuture(t: Training):boolean{
    return isFuture(startOfDay(t.nextRun))
  }


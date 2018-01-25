import { Component, OnInit } from '@angular/core';
import { Training } from './trainings/training.model';
import { TrainingService } from './trainings/training.service';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  trainings$: Observable<Training[]>;
  trainings : Training[];
  selectedTraining: Training;
  subscription:Subscription;
  nextTraining: Observable<Training>;

  constructor(private trainingService:TrainingService){
    this.nextTraining = trainingService.getNext();
  }



  // ngOnInit(){
  // this.subscription = this.trainingService.getAll().subscribe(result => this.trainings = result);
  // }

  // ngOnDestroy(): void {
  // this.subscription.unsubscribe(); 
  // }

  // setSelectedTraining(training:Training){
  //   this.selectedTraining = training;
  //   console.log("EVENT TRAINING IN APP.COMPONENET RECIEVED", training.name)
  // }
}

import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Training } from '../training.model';
import { Observable } from 'rxjs/Observable';
import { TrainingService } from '../training.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-training-list-route',
  templateUrl: './training-list-route.component.html',
  styleUrls: ['./training-list-route.component.css']
})
export class TrainingListRouteComponent implements OnInit, OnDestroy {
  trainings$: Observable<Training[]>;
  trainings: Training[];
  selectedTraining: Training;
  subscription: Subscription;
  detailSubscription: Subscription;

  // constructor(private trainingService: TrainingService) { }
  constructor(private trainingService: TrainingService,  private activeRoute:ActivatedRoute) { }


  ngOnInit() {
    this.subscription = this.trainingService.getAll().subscribe(result => this.trainings = result);
 

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  trainingClicked(training:Training){
    this.detailSubscription = this.activeRoute.params
    .pipe(
    map(params => parseInt(params['id'])),
    switchMap(id => this.trainingService.getById(id)),
    )
  .subscribe(t => this.selectedTraining = t);    
  }

  // setSelectedTraining(training: Training) {
  //   this.selectedTraining = training;
  //   console.log("EVENT TRAINING IN APP.COMPONENET RECIEVED", training.name)
  // }
}

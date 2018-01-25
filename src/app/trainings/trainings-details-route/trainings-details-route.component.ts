import { Component, OnInit } from '@angular/core';
import { Training } from '../training.model';
import { Subscribable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { map, switchMap } from 'rxjs/operators';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-trainings-details-route',
  templateUrl: './trainings-details-route.component.html',
  styleUrls: ['./trainings-details-route.component.css']
})
export class TrainingsDetailsRouteComponent implements OnInit {
  training:Training;
  subscription:Subscription;

  constructor(private activeRoute:ActivatedRoute , private trainingService:TrainingService) { }

  ngOnInit() {
    this.subscription = this.activeRoute.params
      .pipe(
      map(params => parseInt(params['id'])),
      switchMap(id => this.trainingService.getById(id)),
      )
    .subscribe(t => this.training = t);    
  }

}

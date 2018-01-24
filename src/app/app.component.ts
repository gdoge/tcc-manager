import { Component, OnInit } from '@angular/core';
import { Training } from './trainings/training.model';
import { TrainingService } from './trainings/training.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  trainings: Training[];
  selectedTraining: Training;

  constructor(private trainingService:TrainingService){
  }

  ngOnInit(){
    this.trainings = this.trainingService.getAll();
  }

  setSelectedTraining(training:Training){
    this.selectedTraining = training;
    console.log("EVENT TRAINING IN APP.COMPONENET RECIEVED", training.name)
  }
}

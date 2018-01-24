import { Component } from '@angular/core';
import { Training } from './trainings/training.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  trainings: Training[];
  selectedTraining: Training;

  constructor(){
    this.trainings = [
      {name:"test", id:1, discontinued:true},
      {name:"test2", id:2, description:"this is training 2"},
      {name:"test3", id:3, description:"training with picture", imageUrl:"assets/images/trainings/angular2-shield.svg"}
    ]
  }

  setSelectedTraining(training:Training){
    this.selectedTraining = training;
    console.log("EVENT TRAINING IN APP.COMPONENET RECIEVED", training.name)
  }
}

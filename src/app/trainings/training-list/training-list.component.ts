import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Training } from '../training.model';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent {

  selectedTraining:Training;

  @Input() 
  public trainings:Training[];
  
  @Output() 
  public trainingSelected = new EventEmitter<Training>();
 
  onListItemClicked($event:MouseEvent, training:Training){
      this.trainingSelected.emit(training);
      this.selectedTraining = training;
      console.log("Training was clicked", training.name)
  }
}

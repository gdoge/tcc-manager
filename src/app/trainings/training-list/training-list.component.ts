import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Training } from '../training.model';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent {

  @Input() 
  public trainings:Training[];
 
    onListItemClicked($event:MouseEvent, training:Training){
    console.log("Training was clicked", training.name)
  }
}

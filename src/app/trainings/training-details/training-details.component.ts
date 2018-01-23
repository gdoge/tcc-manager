import { Component, Input } from '@angular/core';
import { Training } from '../training.model';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent {

  @Input()
  training:Training;

}

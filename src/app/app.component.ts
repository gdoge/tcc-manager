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

  constructor(){
    this.trainings = [
      {name:"test", id:1},
      {name:"test2", id:2, description:"this is training 2"}
    ]
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Training } from '../training.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorFutureDate } from '../validator-future-date';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit{

  form: FormGroup

  @Input()
  training:Training;

  @Output()
  trainingFormData = new EventEmitter<Partial<Training>>()

  constructor(private futureDateValidator:ValidatorFutureDate){}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl(this.training.name, Validators.required),
      nextRun: new FormControl(this.training.nextRun,[Validators.required, ]),
      description: new FormControl(this.training.description, Validators.minLength(10)),
      discontinued: new FormControl(this.training.discontinued),
    }, this.futureDateValidator.validateFutureDate);
  }

  save(){
    this.trainingFormData.emit(this.form.value)
    
    // this.trainingFormData = this.form.value;
    // Object.assign(this.training, this.form.value)
  }

}

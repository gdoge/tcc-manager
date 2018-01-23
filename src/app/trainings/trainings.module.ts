import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    TrainingListComponent
  ],
  declarations: [
    TrainingListComponent
  ]
})
export class TrainingsModule { }

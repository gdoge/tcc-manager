import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    TrainingListComponent
  ],
  declarations: [
    TrainingListComponent
  ]
})
export class TrainingsModule { }

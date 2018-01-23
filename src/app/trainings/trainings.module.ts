import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';
import { MatListModule, MatCard, MatCardModule, MatIconModule } from '@angular/material';
import { TrainingDetailsComponent } from './training-details/training-details.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    TrainingListComponent,
    TrainingDetailsComponent 
  ],
  declarations: [
    TrainingListComponent,
    TrainingDetailsComponent
  ]
})
export class TrainingsModule { }

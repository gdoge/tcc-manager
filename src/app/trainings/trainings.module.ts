import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';
import { MatListModule, MatCard, MatCardModule, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
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

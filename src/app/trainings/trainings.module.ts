import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';
import { MatListModule, MatCard, MatCardModule, MatIconModule, MatInputModule, MatFormFieldModule, MatAccordion, MatExpansionModule } from '@angular/material';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { FormsModule } from '@angular/forms';
import { TrainingService } from './training.service';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
  ],
  exports: [
    TrainingListComponent,
    TrainingDetailsComponent 
  ],
  declarations: [
    TrainingListComponent,
    TrainingDetailsComponent
  ],
  providers: [
    TrainingService
  ]
})
export class TrainingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponent } from './training-list/training-list.component';
import { MatListModule, MatCard, MatCardModule, MatIconModule, MatInputModule, MatFormFieldModule, MatAccordion, MatExpansionModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingService } from './training.service';
import { TakePlaceSoonPipe } from './take-place-soon.pipe';
import { TrainingListRouteComponent } from './training-list-route/training-list-route.component';
import { TrainingsDetailsRouteComponent } from './trainings-details-route/trainings-details-route.component';
import { RouterModule } from '@angular/router';
import { TrainingExistsGuardService } from './training-exists-guard.service';
import { ValidatorFutureDate } from './validator-future-date';

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
    RouterModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    TrainingListComponent,
    TrainingDetailsComponent
  ],
  declarations: [
    TrainingListComponent,
    TrainingDetailsComponent,
    TakePlaceSoonPipe,
    TrainingListRouteComponent,
    TrainingsDetailsRouteComponent
  ],
  providers: [
    TrainingService,
    TrainingExistsGuardService,
    ValidatorFutureDate
  ]
})
export class TrainingsModule { }

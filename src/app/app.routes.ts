import {Routes} from '@angular/router'
import { TrainingListRouteComponent } from './trainings/training-list-route/training-list-route.component';
import { TrainingsDetailsRouteComponent } from './trainings/trainings-details-route/trainings-details-route.component';
import { TrainingExistsGuardService } from './trainings/training-exists-guard.service';

export let routes: Routes = [
    { path: 'training', component: TrainingListRouteComponent },
    // { path: 'training/:id', component: TrainingListRouteComponent },
    { path: 'training/:id', component: TrainingsDetailsRouteComponent, canActivate: [TrainingExistsGuardService], },
    { path: '**', redirectTo: 'training'}
];

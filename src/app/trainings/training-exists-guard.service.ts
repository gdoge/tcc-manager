import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRoute } from '@angular/router';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { TrainingsDetailsRouteComponent } from './trainings-details-route/trainings-details-route.component';
import { TrainingService } from './training.service';
import { map, first } from 'rxjs/operators';
import { catchError } from 'rxjs/operators/catchError';
import { of } from 'rxjs/observable/of'
import { Router } from '@angular/router/';

@Injectable()
export class TrainingExistsGuardService implements CanActivate {

  constructor(private trainingsService:TrainingService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    const id =  parseInt(route.params['id'], 10);

    return this.trainingsService.getById(id).pipe(
      first(),
      map(training => true) //return true if training found
      ,catchError(err => {
        // 'of' creates an observable
        this.router.navigate(['/trainings'])
        return of(false) //return false if getById thorwed an error
      })
    )
  }

}

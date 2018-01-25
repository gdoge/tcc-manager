import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { TrainingService } from './training.service';
import { DatePipe } from '@angular/common/src/pipes';
import { isFuture } from 'date-fns';

@Injectable()
export class ValidatorFutureDate {
    constructor() { }

    validateFutureDate = (control: AbstractControl):{[key: string]:any} => {

        console.log(control.value)

        if (isFuture(control.value.nextRun)) {
            console.log("validator true")

            return {isFutureDate: true};
        }
        return {isFutureDate: false};
    }
}
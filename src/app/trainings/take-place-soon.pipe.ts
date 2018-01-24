import { Pipe, PipeTransform } from '@angular/core';
import {startOfToday,startOfDay,addDays,isFuture,isToday,isBefore} from "date-fns";

@Pipe({
  name: 'takePlaceSoon'
})
export class TakePlaceSoonPipe implements PipeTransform {


  transform(date:Date | string , soon = 7): boolean {
    const nextRun = startOfDay(date);
    const notSoonAnymore = addDays(startOfToday(), soon + 1);

    return isToday(nextRun) || isFuture(nextRun) && isBefore(nextRun, notSoonAnymore);
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Show } from './classes/Show';
import { BookingStatus } from './classes/BookingStatus';

@Pipe({
  name: 'filterShows'
})
export class FilterShowsPipe implements PipeTransform {

  transform(items: Show[]): Show[] {
    let shows: Show[] = [];
    for(let i = 0; i < items.length; i++) {
      for(let j = 0; j < items[i].seats.length; j++) {
        if (items[i].seats[j].seatStatus === BookingStatus.AVAILABLE) {
          shows.push(items[i]);
          break;
        }
      }
    }
    return shows;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Seat } from './classes/Seat';
import { BookingStatus } from './classes/BookingStatus';

@Pipe({
  name: 'filterseatlist'
})
export class FilterseatlistPipe implements PipeTransform {

  transform(items: any[]): any[] {
    return items.filter((item) => item.seatStatus == BookingStatus.AVAILABLE);
  }

}

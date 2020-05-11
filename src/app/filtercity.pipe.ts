import { Pipe, PipeTransform } from '@angular/core';
import { Theatre } from './classes/Theatre';

@Pipe({
  name: 'filtercity'
})
export class FiltercityPipe implements PipeTransform {

  transform(items: Theatre[], searchCityName: string): any {
    if (searchCityName === "") {
      return items;
    }
    const theatres: Theatre[] = [];
    for (let i = 0; i < items.length; i++) {
      let theatreCity: string = items[i].theatreCity;
      if (theatreCity.startsWith(searchCityName)) {
        theatres.push(items[i])
      }
    }
    return theatres;

  }
}

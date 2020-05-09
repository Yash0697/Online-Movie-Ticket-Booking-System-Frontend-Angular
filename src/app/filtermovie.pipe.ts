import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtermovie'
})
export class FiltermoviePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

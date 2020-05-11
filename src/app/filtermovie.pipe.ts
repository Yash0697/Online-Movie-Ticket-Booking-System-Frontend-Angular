import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './classes/Movie';

@Pipe({
  name: 'filtermovie'
})
export class FiltermoviePipe implements PipeTransform {

  transform(items: Movie[], searchMovieName: string): any {
    if (searchMovieName===""){
      return items;
    }
    const movies: Movie[] = [];
    for(let i=0; i<items.length;i++){
      let movieName: string = items[i].movieName;
      if(movieName.startsWith(searchMovieName)){
        movies.push(items[i])
      }
    }
    return movies;
  }

}

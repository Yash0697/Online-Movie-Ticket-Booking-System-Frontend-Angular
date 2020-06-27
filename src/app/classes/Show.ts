import { Movie } from './Movie';
import { Seat } from './Seat';
import { Time } from '@angular/common';


export class Show{
showId:number;
showStartTime:Time;
showEndTime:Time;
seats:Seat[];
showName:string;
movieName:Movie;
screenId:number;
theatreId:number;


constructor(showId:number,  showStartTime:Time , showEndTime:Time,  seats:Seat[],  showName:string,  movieName:Movie,screenId:number, theatreId:number)
   {
 this.showId = showId;
this.showStartTime = showStartTime;
this.showEndTime = showEndTime;
this.seats = seats;
this.showName = showName;
this.movieName = movieName;
this.screenId = screenId;
this.theatreId = theatreId;
}

}
import { Movie } from './Movie';
import { Seat } from './Seat';


export class Show{
showId:number;
showStartTime:string;
showEndTime:string;
seats:Seat[];
showName:string;
movieName:Movie;
screenId:number;
theatreId:number;


constructor(showId:number,  showStartTime:string , showEndTime:string,  seats:Seat[],  showName:string,  movieName:Movie,screenId:number, theatreId:number)
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
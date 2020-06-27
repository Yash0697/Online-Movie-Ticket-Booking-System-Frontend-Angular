import { Ticket } from './Ticket';
import { Show } from './Show';
import { Seat } from './Seat';

export class Booking
{
bookingId:number;
 movieId:number;
  showRef:Show;
  showId:number;
   bookingDate:Date;
   transactionId:number;
   totalCost:number;
    seatList:Seat[];
    userId:string;


    constructor(bookingId:number,  movieId:number, showRef:Show,showId:number, bookingDate:Date,transactionId:number,totalCost:number, seatList:Seat[], userId: string)
    {
     this.bookingId=bookingId;
     this.movieId=movieId;
     this.showRef=showRef;
     this.showId=showId;
     this.bookingDate=bookingDate;
     this.transactionId=transactionId;
     this.totalCost=totalCost;
     this.seatList=seatList;
     this.userId = userId;
    }
}
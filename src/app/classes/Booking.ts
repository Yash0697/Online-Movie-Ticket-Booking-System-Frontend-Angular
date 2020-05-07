import { Ticket } from './Ticket';
import { Show } from './Show';
import { Seat } from './Seat';

export class Booking
{
bookingId:number;
ticket:Ticket;
 movieId:number;
  showRef:Show;
  showId:number;
   bookingDate:Date;
   transactionId:number;
   totalCost:number;
    seatList:Seat;


    Booking(bookingId:number, ticket:Ticket, movieId:number, showRef:Show,showId:number, bookingDate:Date,transactionId:number,totalCost:number, seatList:Seat)
    {
     this.bookingId=bookingId;
     this.ticket=ticket;
     this.movieId=movieId;
     this.showRef=showRef;
     this.showId=showId;
     this.bookingDate=bookingDate;
     this.transactionId=transactionId;
     this.totalCost=totalCost;
     this.seatList=seatList;
    }
}
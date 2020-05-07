
export class Ticket
{
ticketId:number;
 noOfSeats:number;
 seatNames:string;
 ticketStatus:boolean;
 screenName:string;
 bookingId:number


    Ticket(ticketId:number, noOfSeats:number,seatNames:string,ticketStatus:boolean,screenName:string, bookingId:number)
{
      this.ticketId=ticketId;
      this.noOfSeats=noOfSeats;
      this.seatNames=seatNames;
      this.ticketStatus=ticketStatus;
      this.screenName=screenName;
      this.bookingId=bookingId;
}

}

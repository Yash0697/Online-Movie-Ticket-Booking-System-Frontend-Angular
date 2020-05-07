import { Component, OnInit } from '@angular/core';
import { Seat } from '../classes/Seat';
import { BookingStatus } from '../classes/BookingStatus';
import { Movie } from '../classes/Movie';
import { Show } from '../classes/Show';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {

  showId:number;
  showName:string;
  showStartTime:string;
  showEndTime:string;
  screenId:number;
  theatreId:number;
  movie:Movie;
  seats:Seat[];
  showList:Show[];
  more:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  addShow(){
    for (var _i = 1; _i <= 20; _i++) {
      let seat = new Seat(_i, BookingStatus.AVAILABLE, 1200);
      this.seats.push(seat);
    }

    while(this.more){
    let show = new Show(this.showId, this.showStartTime,
       this.showEndTime, this.seats, this.showName, this.movie, this.screenId, this.theatreId);
    }
  }

}

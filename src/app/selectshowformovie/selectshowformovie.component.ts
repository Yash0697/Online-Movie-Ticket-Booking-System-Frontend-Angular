import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { Theatre } from '../classes/Theatre';
import { Movie } from '../classes/Movie';
import { Show } from '../classes/Show';
import { Seat } from '../classes/Seat';
import { BookingStatus } from '../classes/BookingStatus';
import { Booking } from '../classes/Booking';
import { PostDataService } from '../services/post-data.service';

@Component({
  selector: 'app-selectshowformovie',
  templateUrl: './selectshowformovie.component.html',
  styleUrls: ['./selectshowformovie.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class SelectshowformovieComponent implements OnInit {

  theatre:Theatre;
  movie:Movie;
  shows: Show[] = [];
  seatList:Seat[] = [];
  selectedSeats:number = 0;
  selectedSeatsRef :Seat[];
  constructor(private router: Router, private route: ActivatedRoute,
    private getDataService: GetDataService, private postDataService: PostDataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movie = JSON.parse(params.movie),
      this.theatre = JSON.parse(params.theatre)});
      this.getDataService.getShowsByMovieAndTheatre(
        this.movie.movieName,
        this.theatre.theatreName
        ).subscribe(data => {
          this.shows = data;
    });
  }

  forwardToBooking(show){
    this.seatList = show.seats;
    let seats: Seat[] = [];
    if(this.selectedSeats==0)
        alert('select atleast one seat')
    else{
      console.log('seats selected : ' + this.selectedSeats)
      let amount = 0;
      let i = 0;
      let j = 0;
      while(j < show.seats.length && i < this.selectedSeats) {
        console.log('seat status _____' + this.seatList[j].seatStatus)
        if(this.seatList[j].seatStatus == BookingStatus.AVAILABLE){
          seats.push(this.seatList[j]);
          i++;
          amount =  amount + this.seatList[j].seatPrice;
        }
        j++;

      }
      let userId = JSON.parse(localStorage.getItem('User')).id;
      let booking = new Booking(1,this.movie.movieId, show, show.showId, new Date(), 1, amount, seats, userId);
      this.postDataService.addBooking(booking).subscribe(result =>{

      },
        (error) => {                              //Error callback
          console.log('error caught in component')
          alert('Some Error exists')
        }
        );

      this.router.navigate(['./movie/theatre/show/showdetails'], {
    queryParams: { theatre: JSON.stringify(this.theatre), movie: JSON.stringify(this.movie),
       show: JSON.stringify(show),seats: JSON.stringify(seats), amount: amount }
       })
    }
  }



}

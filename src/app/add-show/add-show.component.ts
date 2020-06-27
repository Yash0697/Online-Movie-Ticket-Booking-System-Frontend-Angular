import { Component, OnInit } from '@angular/core';
import { Seat } from '../classes/Seat';
import { BookingStatus } from '../classes/BookingStatus';
import { Movie } from '../classes/Movie';
import { Show } from '../classes/Show';
import { GetDataService } from '../services/get-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Theatre } from '../classes/Theatre';
import { PostDataService } from '../services/post-data.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class AddShowComponent implements OnInit {

  showId:number;
  showName:string;
  showStartTime:Time;
  showEndTime:Time;
  screenId:number;
  theatreId:number;
  movie:Movie;
  seats:Seat[];
  showList:Show[];
  movieNames: Movie[];
  screens: Screen[];
  theatres: Theatre[];
  movieSelected:Movie;
  more:boolean;
  constructor(private getDataService: GetDataService,
     private router: Router,
      private route: ActivatedRoute,
    private postDataService: PostDataService) { }

  ngOnInit(): void {

    this.getDataService.getShowData().subscribe(data => {
      console.log(data);
      this.showList = data;
    })

    this.getDataService.getMovies().subscribe(data => {
      console.log(data);
      this.movieNames = data;
    })

    this.getDataService.getTheatreData().subscribe(data => {
      this.theatres = data;
    })

    this.getDataService.getScreenData().subscribe(data => {
      console.log(data);
      this.screens = data;
    })

  }

  selectMovie(value: Movie){
    console.log('Movie=============='+this.movieSelected.movieName)
    this.movie=value;

  }


  selectScreen(value){
    this.screenId = value;
  }

  addShow(){
    console.log('started adding ')
    let showId = +(this.showId + '' + this.theatreId + '' + this.movieSelected.movieId + this.screenId);
    let show = new Show(showId, this.showStartTime, this.showEndTime, this.seats, this.showName, this.movieSelected,
     +(this.screenId), this.theatreId );
     console.log('adding show')
    this.postDataService.addShow(show).subscribe(data => {
      if (data == false) {
        alert('A Show Already Exists with this Id');
      }
      else{
        alert("Show created successfully.");
        this.ngOnInit();
        location.reload();
      }
    },
      (error) => {                              //Error callback
        console.log('error caught in component')
        alert('Some Error occurred')

        //throw error;   //You can also throw the error to a global error handler
      });

  }

  deleteShow(show){
    this.postDataService.deleteShow(show)
      .subscribe(data => {
      },
        (error) => {                              //Error callback
          console.log('error caught in component')
          alert('Some Error occurred')

          //throw error;   //You can also throw the error to a global error handler
        })
    this.ngOnInit();
    location.reload();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { Theatre } from '../classes/Theatre';
import { Movie } from '../classes/Movie';
import { Show } from '../classes/Show';
import { Seat } from '../classes/Seat';

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
  shows: Show[];
  seatList:Seat[];
  constructor(private router: Router, private route: ActivatedRoute, private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movie = JSON.parse(params.movie),
      this.theatre = JSON.parse(params.theatre)});
      console.log(this.theatre);
      console.log(this.movie);
      this.getDataService.getShowsByMovieAndTheatre(this.movie.movieName, this.theatre.theatreName).subscribe(data => {
      this.shows = data;
      console.log(this.shows);
    });
  }

  forwardToBooking(show){

  }

  Navigate(value){

  }

}

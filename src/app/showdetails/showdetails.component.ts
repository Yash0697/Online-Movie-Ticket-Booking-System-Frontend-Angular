import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../classes/Movie';
import { Theatre } from '../classes/Theatre';
import { Show } from '../classes/Show';
import { Seat } from '../classes/Seat';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class ShowdetailsComponent implements OnInit {

  movie: Movie;
  theatre: Theatre;
  show: Show;
  seatList: Seat[];
  amount:number;
  user: string;
  countSeats:number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movie = JSON.parse(params.movie),
        this.theatre = JSON.parse(params.theatre),
        this.show = JSON.parse(params.show),
        this.seatList = JSON.parse(params.seats),
        this.amount = params.amount;
         });
         this.countSeats = this.seatList.length;
         this.user = JSON.parse(localStorage.getItem('User')).name;
  }

  onClick(){
    
  }

}

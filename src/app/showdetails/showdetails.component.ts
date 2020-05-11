import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../classes/Movie';
import { Theatre } from '../classes/Theatre';
import { Show } from '../classes/Show';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  movie: Movie;
  theatre: Theatre;
  show: Show;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movie = JSON.parse(params.movie),
        this.theatre = JSON.parse(params.theatre),
        this.show = JSON.parse(params.show)
    });
    console.log(this.theatre);
    console.log(this.movie);
    console.log(this.show)
  }

}

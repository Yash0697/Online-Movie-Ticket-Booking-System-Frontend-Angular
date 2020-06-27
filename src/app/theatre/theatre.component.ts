import { Component, OnInit } from '@angular/core';
import { Movie } from '../classes/Movie';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class TheatreComponent implements OnInit {

  movies: Movie[];
  theatreNames: String[]
  constructor(private myService :SearchService) { }

  ngOnInit(): void {

    this.myService.getAllTheatre().subscribe(data => {
      this.theatreNames = data;
      console.log(this.theatreNames)
    })
  }

  Navigate(value) {
    this.myService.searchMovieByTheater(value)
      .subscribe(data => {
        this.movies = data;
      });

  }
  Book(){
    alert("You have to registered .......")
  }
}

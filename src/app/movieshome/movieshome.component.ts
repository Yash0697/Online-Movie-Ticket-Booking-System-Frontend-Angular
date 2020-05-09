import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { Movie } from '../classes/Movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieshome',
  templateUrl: './movieshome.component.html',
  styleUrls: ['./movieshome.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class MovieshomeComponent implements OnInit {

  searchMovie: string;

  movies:Movie[];
  constructor(private router: Router, private getDataService : GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getMovies().subscribe(data => {
      console.log(data);
      this.movies = data;
    });
  }

  forwardToBooking(movie){
    this.router.navigate(['./movie/theatre'], {
      queryParams: { data: JSON.stringify(movie) }
    })
  }

}

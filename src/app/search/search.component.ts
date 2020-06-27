import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../classes/Movie';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css',
                 '../../css/bootstrap-grid.min.css',
                  '../../css/bootstrap-reboot.min.css',
                  '../../css/main.css']
})
export class SearchComponent implements OnInit {

  theatreCity:String 
  theatreName :String;
  movies : Movie []

    listOfMovies : Movie []
  theatreCities : String []
  theatreNames : String[]
  constructor(private myService : SearchService) { }

  ngOnInit(): void {

    this.myService.getAllCities().subscribe(data => {
      this.theatreCities = data;
      console.log(this.theatreCities)
    })
  }
 

  
  Navigate(value) {
    this.myService.searchMovieByCity(value)
      .subscribe(data => {
        this.movies = data;
      });

}
Book()
{
  alert("first you have to registered...")
}
}
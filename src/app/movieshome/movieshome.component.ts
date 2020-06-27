import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { Movie } from '../classes/Movie';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PostDataService } from '../services/post-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movieshome',
  templateUrl: './movieshome.component.html',
  styleUrls: ['./movieshome.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class MovieshomeComponent implements OnInit {

  searchMovie: string = "";

  movies:Movie[];
  isAdmin:boolean=false;
  movie: Movie;
  movieId:string;
  releaseDate: Date;
  movieName: string;
  movieGenre:string;
  movieDirector: string;
  movieLength: number;
  language: string;
  languages: string[] = [];
  isClicked:boolean;
  constructor(private router: Router, private getDataService : GetDataService,
    private postDataService: PostDataService,
     private authService: AuthService) {
       
      }

  ngOnInit(): void {
    this.getDataService.getMovies().subscribe(data => {
      console.log(data);
      this.movies = data;
    });
    if(this.authService.userType=='Admin')
    this.isAdmin = true;
  }

  forwardToBooking(movie){
    this.router.navigate(['./movie/theatre'], {
      queryParams: { data: JSON.stringify(movie) }
    })
  }

  deleteMovie(movie:any){
  this.postDataService.deleteMovie(movie)
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

  addMovie(){
    let id = +('3'+this.movieId);
    this.languages = this.language.split(',');
    this.movie = new Movie(id, this.movieName, this.movieGenre, this.movieDirector, this.movieLength, this.languages, this.releaseDate);
    this.postDataService.addMovie(this.movie).subscribe(data => {
      if(data==false){
        alert('A Movie Already Exists with this Id');
      }
    },
    
    
    );
    alert("Movie created successfully.");
    this.ngOnInit();
    location.reload();

  }
  
  openForm(){
    this.isClicked = true;
  }

}

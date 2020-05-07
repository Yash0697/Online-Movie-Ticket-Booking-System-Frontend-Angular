import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { BookingStatus } from '../classes/BookingStatus';
import { Seat } from '../classes/Seat';
import { Movie } from '../classes/Movie';
import { GetDataService } from '../services/get-data.service';
import { PostDataService } from '../services/post-data.service';
import { Theatre } from '../classes/Theatre';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class AddTheatreComponent implements OnInit {

  theatreName:string;
  theatreCity:string;
  managerName:string;
  managerContact:string;
  movies:Movie[];
  screens:Screen[];
  theatres : Theatre[];
  listOfMovies : Movie[];
  listOfScreens : Screen[];
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  isValidFormSubmitted = false; 
  constructor(private getDataService: GetDataService, private postData: PostDataService,
    private route :ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.getDataService.getTheatreData().subscribe(data => {
      console.log(data);
      this.theatres = data;
    });
  }

  showMovies() {
    this.getDataService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  addTheatre(){
    let data: any = new Theatre(1, this.theatreName, this.theatreCity, 
      this.listOfMovies, [], this.managerName, this.managerContact);
   this.router.navigate(['./screen'], {
     queryParams: {data: JSON.stringify(data)}
   })
  }

  deleteTheatre(theatre){

  }

}

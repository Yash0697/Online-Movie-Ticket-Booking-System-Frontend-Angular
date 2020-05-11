import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { BookingStatus } from '../classes/BookingStatus';
import { Seat } from '../classes/Seat';
import { Movie } from '../classes/Movie';
import { GetDataService } from '../services/get-data.service';
import { PostDataService } from '../services/post-data.service';
import { Theatre } from '../classes/Theatre';
import { Router, ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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
  moviesSelected:string[];
  screens:Screen[];
  theatres : Theatre[];
  listOfMovies : Movie[];
  listOfScreens : Screen[];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {}; 
  constructor(private getDataService: GetDataService, private postData: PostDataService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.getDataService.getMovies().subscribe(data1 => {
        this.movies = data1;
      console.log(this.movies);
    });

    this.getDataService.getTheatreData().subscribe(data => {
      this.theatres = data;
    });

    
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'movieId',
      textField: 'movieName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log('selected '+item.movieName);
    this.moviesSelected.push(item.movieName)
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  showMovies() {
    this.getDataService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  addTheatre(){
    let data: Theatre = new Theatre(1, this.theatreName, this.theatreCity, 
      this.listOfMovies, [], this.managerName, this.managerContact);
      if(!(this.theatreName==undefined || this.theatreCity==undefined || this.managerContact==undefined || this.managerName==undefined))
      {
        console.log('forwarding............')
        this.router.navigate(['./admin/theatre/screen'], {
          queryParams: {
            data: JSON.stringify(data)
          }
        })
      }
  }

  deleteTheatre(theatre){

  }

}

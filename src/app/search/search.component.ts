import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css',
                 '../../css/bootstrap-grid.min.css',
                  '../../css/bootstrap-reboot.min.css',
                  '../../css/main.css']
})
export class SearchComponent implements OnInit {

  city:string;
  theatre:string;
  constructor() { }

  ngOnInit(): void {
  }

  searchByCity(){

  }

  searchByTheatre(){
    
  }
}

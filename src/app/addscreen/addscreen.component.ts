import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theatre } from '../classes/Theatre';

@Component({
  selector: 'app-addscreen',
  templateUrl: './addscreen.component.html',
  styleUrls: ['./addscreen.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class AddscreenComponent implements OnInit {

  data : any;
  theatreId : number;
  screenName : string;
  rows:number;
  columns:number;
  constructor( private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

      this.route.queryParams.subscribe((params) =>
      this.data=JSON.parse(params.data));
      this.theatreId = this.data.theatreId;
  }
  
  addScreen(){
    
  }

}

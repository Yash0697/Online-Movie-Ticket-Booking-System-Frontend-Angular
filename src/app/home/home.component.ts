import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
            '../../css/bootstrap-grid.min.css',
            '../../css/bootstrap-reboot.min.css',
            '../../css/main.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}

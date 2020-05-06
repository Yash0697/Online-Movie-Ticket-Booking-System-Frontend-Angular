import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
                '../css/bootstrap-grid.min.css',             
                '../css/bootstrap-reboot.min.css',
                '../css/main.css'                      ]
})
export class AppComponent {
  title = 'OnlineMovieTicketBookingSystem';
}

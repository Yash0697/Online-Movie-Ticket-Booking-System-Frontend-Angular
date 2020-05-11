import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../classes/Movie';
import { GetDataService } from '../services/get-data.service';
import { Theatre } from '../classes/Theatre';

@Component({
  selector: 'app-selecttheatre-for-movie',
  templateUrl: './selecttheatre-for-movie.component.html',
  styleUrls: ['./selecttheatre-for-movie.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class SelecttheatreForMovieComponent implements OnInit {

  data: any;
  movie: Movie;
  theatres:Theatre[];
  searchCity: string="";
  constructor(private router: Router, private route: ActivatedRoute, private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>
      this.data = JSON.parse(params.data));
      this.movie = this.data;
      this.getDataService.getTheatreListByCityName(this.movie.movieName).subscribe(data => {
      this.theatres = data;
      console.log(this.theatres);
    });

  }

  forwardToBooking(theatre){
    this.router.navigate(['./movie/theatre/show'], {
      queryParams: { theatre: JSON.stringify(theatre), movie: JSON.stringify(this.movie) }
    })
  }

}

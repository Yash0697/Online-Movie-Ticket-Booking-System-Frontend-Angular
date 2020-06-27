import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  private baseUrl = 'http://localhost:8050/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  constructor(private http: HttpClient) { }

  addTheatre(theatre){
    return this.http.post(`${this.baseUrl}` + 'theatre/addTheatre', theatre, this.httpOptions)
  }

  deleteMovie(movie) {
    return this.http.delete(`${this.baseUrl}`+`movie/delete/` + movie.movieId)
  }

  deleteShow(show) {
    return this.http.delete(`${this.baseUrl}`+`show/delete/` + show.showId)
  }

  addMovie(movie: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `movie/addMovie`, movie, this.httpOptions);
  }

  addShow(show: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `show/addShow/`, show, this.httpOptions);
  }

  addBooking(booking: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `booking/addBooking/`, booking, this.httpOptions);
  }

}

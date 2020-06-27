import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../classes/Movie';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8050/theatre/";


  searchMovieByCity(theatreCity: String): Observable<any> {

    return this.http.get(`${this.baseUrl}` + `/getByCity/` + theatreCity);

  }
  searchMovieByTheater(theatreName: String): Observable<any> {

    return this.http.get(`${this.baseUrl}` + `/getByTheatre/` + theatreName);
  }

  
  getAllCities(): Observable<any> {
    return this.http.get<string>(`${this.baseUrl}` + `allCities`);
  }

  getAllTheatre(): Observable<any> {
    return this.http.get<Movie>(`${this.baseUrl}` + `allTheatres`)
  }

}

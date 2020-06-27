import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theatre } from '../classes/Theatre';
import { Movie } from '../classes/Movie';
import { Show } from '../classes/Show';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private baseUrl = 'http://localhost:8050/'

  constructor(private http: HttpClient) { }

  getTheatreData():  Observable<any>{
    return this.http.get<Theatre>(`${this.baseUrl}` + `theatre/all`)
  }

  getTheatreListByCityName(cityName): Observable<any>{
    return this.http.post(`${this.baseUrl}` + `theatre/selectByMovieName`, cityName);
  }


  getShowsByMovieAndTheatre(movieName, theatreName): Observable<any>{
    return this.http.get(`${this.baseUrl}` +
     `theatre/selectByMovieAndTheatre`+`?movieName=`+ movieName + `&&theatreName=` + theatreName);
  }

  getTheatreDataById(id) : Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'theatre/'+id)
  }

  getScreenData(): Observable<any> {
    return this.http.get<Screen>(`${this.baseUrl}` + 'screen/all')
  }

  getScreenDataById(id): Observable<any>{
    return this.http.get(`${this.baseUrl}` + 'screen/' + id)
  }

  getShowData(): Observable<any>{
    return this.http.get<Show>(`${this.baseUrl}` + 'show/all')
  }

  getShowDataById(id) {
    return this.http.get(`${this.baseUrl}` + 'show/' + id)
  }

  getSeatData() {
    return this.http.get(`${this.baseUrl}` + 'seat/all')
  }

  getMovies() : Observable<any>{
    return this.http.get<Movie>(`${this.baseUrl}` + `movie/all`)
  }

  getMovieById(id) {
    return this.http.get(`${this.baseUrl}` + 'movie/' + id)
  }
}

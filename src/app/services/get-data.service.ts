import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theatre } from '../classes/Theatre';
import { Movie } from '../classes/Movie';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private baseUrl = 'http://localhost:8050/'

  constructor(private http: HttpClient) { }

  getTheatreData():  Observable<any>{
    return this.http.get<Theatre>(`${this.baseUrl}` + `theatre/all`)
  }

  getTheatreDataById(id) : Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'theatre/'+id)
  }

  getScreenData() {
    return this.http.get(`${this.baseUrl}` + 'screen/all')
  }

  getScreenDataById(id) {
    return this.http.get(`${this.baseUrl}` + 'screen/' + id)
  }

  getShowData(){
    return this.http.get(`${this.baseUrl}` + 'show/all')
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

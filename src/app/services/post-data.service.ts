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
    console.log('deleting.............')
    return this.http.delete(`${this.baseUrl}`+`movie/delete/` + movie.movieId)
  }

  addMovie(movie: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `movie/addMovie`, movie, this.httpOptions);
  }
}

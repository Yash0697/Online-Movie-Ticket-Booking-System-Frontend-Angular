import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

}

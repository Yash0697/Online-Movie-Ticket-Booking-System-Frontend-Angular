import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular-jwt';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    private baseUrl = 'http://localhost:8060/accounts/';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    constructor(private http: HttpClient) {
    }

    login(credentials) {
        
        return this.http.post(`${this.baseUrl}`+`login`, credentials, this.httpOptions)
            .pipe(map((response: Response) => {
                console.log(response);
                let token = response['token'];
                if (response && token) {
                    localStorage.setItem('User', response['name']);
                    localStorage.setItem('token',token);
                    localStorage.setItem('type', response['type']);
                    return true;
                }
                return false;
            },
                (error) => {                              //Error callback
                    console.log('error caught in service')

                }
            
            )
            );
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('User');
    }

     isLoggedIn() {
         let token = localStorage.getItem('token');
         if(token)
         return true;
         else
         return false;
     }

    get currentUser() {
        let token = localStorage.getItem('token');
        if (!token) return null;

       return localStorage.getItem('User');
       
    }

    get userType(){
        let type = localStorage.getItem('type');
        console.log(type);
        if(!type) return null;
        return type;
    }

    signup(user): Observable<any> {
        return this.http.post(`${this.baseUrl}` + `signup`, user);
    }
}


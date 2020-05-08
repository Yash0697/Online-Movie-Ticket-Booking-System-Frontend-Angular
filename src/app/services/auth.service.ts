import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular-jwt';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    private loginUrl = 'http://localhost:8060/accounts/login';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    constructor(private http: HttpClient) {
    }

    login(credentials) {
        
        return this.http.post(`${this.loginUrl}`, credentials, this.httpOptions)
            .pipe(map((response: Response) => {
                console.log(response);
                let token = response['token'];
                if (response && token) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('User', response['name']);
                    return true;
                }
                return false;
            }));
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
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
}


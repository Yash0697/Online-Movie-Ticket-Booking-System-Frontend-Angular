import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular-jwt';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    private loginUrl = 'http://localhost:8060/accounts/authenticate';
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
            // .pipe(map((response: Response) => {
            //     let result = response.json;
            //     let token = result['token'];
            //     if (result && token) {
            //         localStorage.setItem('token', token);
            //         return true;
            //     }
            //     return false;
            // }));
    }

    logout() {
        localStorage.removeItem('token');
    }

    // isLoggedIn() {
    //     return tokenNotExpired();

    //     //or
    //     // let jwtHelper = new JwtHelper();
    //     // let token = localStorage.getItem('token'); 
    //     // if(!token)
    //     // return false;
    //     // let jwtExpirationDate = jwtHelper.getTokenExpirationDate();
    //     // let isJwtExpired = jwtHelper.isTokenExpired('token');

    //     // return !isJwtExpired;
    // }

    // get currentUser() {
    //     let token = localStorage.getToken('token');
    //     if (!token) return null;

    //     let jwtHelper = new JwtHelper();
    //     return jwtHelper.decodeToken(token);
    // }
}


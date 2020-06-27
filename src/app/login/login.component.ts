import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Authorization } from '../classes/Authorization';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class LoginComponent implements OnInit {

  public href: string = "";
  public url: true;
  invalidLogin: boolean  = false;
  email:string;
  password:string;
  errorMessage: string = "";
  auth : Authorization;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    // this.href = this.router.url;
    // alert(this.router.url);
  }


  signIn() {
    this.auth = new Authorization(this.email, this.password);
    this.authService.login(this.auth)
      .subscribe(result => {       
          this.router.navigate(['/movies']);
      },
      (error) => {                              //Error callback
          console.log('error caught in component')
          this.invalidLogin = true;

          //throw error;   //You can also throw the error to a global error handler
        }
      );
  }

}

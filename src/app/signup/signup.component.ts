import { Component, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { PostDataService } from '../services/post-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',
    '../../css/bootstrap-grid.min.css',
    '../../css/bootstrap-reboot.min.css',
    '../../css/main.css']
})
export class SignupComponent implements OnInit {

  id: string;
  type: string;
  name: string;
  password: string;
  phone: string;
  email: string;
  alreadyExists: boolean;
  errorExists: boolean;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  signUp(){
    let phoneNo = +this.phone;
    let user = new User('1', 'User', this.name, this.password, phoneNo, this.email);
    this.authService.signup(user)
      .subscribe(result => {
        if(!(this.name==undefined || this.password==undefined || this.email==undefined || phoneNo == undefined || this.password.length < 8))
          this.router.navigate(['/login']);
      },
        (error) => {                              //Error callback
          console.log('error caught in component')
          this.errorExists = true;

          //throw error;   //You can also throw the error to a global error handler
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
            '../../css/bootstrap-grid.min.css',
            '../../css/bootstrap-reboot.min.css',
            '../../css/main.css']
})
export class HomeComponent {

  public href: string = "";
  public url: true;
  constructor(private router: Router, public authService:AuthService) { }

isLoginPage(){
  this.href = this.router.url;
  if(this.href=='/login')
    return true;
  else
    return false;
}
}

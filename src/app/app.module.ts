import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SearchByMovieNameComponent } from './search-by-movie-name/search-by-movie-name.component';
import { SearchComponent } from './search/search.component';

const routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component:SearchComponent },
  // { path: 'no-access', component: NoAccessComponent }
  { path: 'signup', component: SignupComponent }
] 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SearchByMovieNameComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

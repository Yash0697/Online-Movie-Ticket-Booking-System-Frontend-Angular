import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service'
import { GetDataService } from './services/get-data.service'
import { PostDataService } from './services/post-data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SearchByMovieNameComponent } from './search-by-movie-name/search-by-movie-name.component';
import { SearchComponent } from './search/search.component';
import { AddTheatreComponent } from './add-theatre/add-theatre.component';
import { AddShowComponent } from './add-show/add-show.component';
import { MovieshomeComponent } from './movieshome/movieshome.component';
import { AddscreenComponent } from './addscreen/addscreen.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component:SearchComponent },
  // { path: 'no-access', component: NoAccessComponent }
  { path: 'signup', component: SignupComponent },
  { path: 'movies', component:MovieshomeComponent },
  { path : 'theatre', component: AddTheatreComponent },
  { path: 'screen', component: AddscreenComponent }
] 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SearchByMovieNameComponent,
    SearchComponent,
    AddTheatreComponent,
    AddShowComponent,
    AddscreenComponent,
    MovieshomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, SearchService, GetDataService, PostDataService, 
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

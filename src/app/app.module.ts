import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service'
import { GetDataService } from './services/get-data.service'
import { PostDataService } from './services/post-data.service'
import { AuthGuard } from './services/auth-guard.service'
import { AdminAuthGuard } from './services/admin-auth-guard.service'

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
import { SelecttheatreForMovieComponent } from './selecttheatre-for-movie/selecttheatre-for-movie.component';
import { BookticketformovieComponent } from './bookticketformovie/bookticketformovie.component';
import { SelectshowformovieComponent } from './selectshowformovie/selectshowformovie.component';
import { FilterseatlistPipe } from './filterseatlist.pipe';
import { PhonenumberDirective } from './phonenumber.directive';
import { FiltermoviePipe } from './filtermovie.pipe';
import { FiltercityPipe } from './filtercity.pipe';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { TheatreComponent } from './theatre/theatre.component';
import { FilterShowsPipe } from './filter-shows.pipe';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'theatre', component: TheatreComponent },
  { path: 'search', component:SearchComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'movies', component:MovieshomeComponent },
  { path: 'movie/theatre', component:SelecttheatreForMovieComponent, canActivate: [AuthGuard]},
  { path: 'movie/theatre/show', component: SelectshowformovieComponent, canActivate: [AuthGuard] },
  { path: 'movie/theatre/show/showdetails', component: ShowdetailsComponent, canActivate: [AuthGuard] },
  { path: 'admin/theatre', component: AddTheatreComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/show', component: AddShowComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  { path: 'admin/theatre/screen', component: AddscreenComponent, canActivate: [AuthGuard, AdminAuthGuard] }
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
    SelecttheatreForMovieComponent,
    BookticketformovieComponent,
    SelectshowformovieComponent,
    FilterseatlistPipe,
    PhonenumberDirective,
    FiltermoviePipe,
    FiltercityPipe,
    ShowdetailsComponent,
    TheatreComponent,
    FilterShowsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [AuthService, SearchService, GetDataService, PostDataService, AuthGuard, AdminAuthGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

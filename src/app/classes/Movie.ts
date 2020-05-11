export class Movie
{

    movieId:number;
    movieName:string;
     movieGenre:string;
     movieDirector:string;
      movieLength:number;
      languages:String[];
    movieReleaseDate:Date;


     constructor(movieId:number,  movieName:string,  movieGenre:string, movieDirector:string, movieLength:number, languages:string[], movieReleaseDate:Date) {
              this.movieId = movieId;
              this.movieName = movieName;
              this.movieGenre = movieGenre;
              this.movieDirector = movieDirector;
              this.movieLength = movieLength;
              this.languages = languages;
              this.movieReleaseDate = movieReleaseDate;
}
}
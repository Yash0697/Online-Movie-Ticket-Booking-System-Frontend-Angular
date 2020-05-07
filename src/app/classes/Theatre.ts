import { Screen } from './Screen';
import { Movie } from './Movie';

export class Theatre
{
    theatreId:number;
    theatreName:string;
     theatreCity:string;
     listOfMovies:Movie[];
     listOfScreens:Screen[];
     managerName:string;
     managerContact:string;

    


    constructor(theatreId: number, theatreName: string, theatreCity: string, listOfMovies: Movie[], listOfScreens: Screen[], managerName: string, managerContact: string) {
        this.theatreId = theatreId;
        this.theatreName = theatreName;
        this.theatreCity = theatreCity;
        this.listOfMovies = listOfMovies;
        this.listOfScreens = listOfScreens;
        this.managerName = managerName;
        this.managerContact = managerContact;

    }   

}
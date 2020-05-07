import { Show } from './Show';

export class Screen
{
    screenId:number;
    theatreId:number;
    screenName:string;
    showList:Show[];
    rows:number;
    columns:number;
    

    constructor(screenId:number ,theatreId:number, screenName:string,showList:Show[], rows:number,columns:number)
    {
        this.screenId=screenId;
        this.theatreId=theatreId;
        this.screenName=screenName;
        this.showList=showList;
        this.rows=rows;
        this.columns=columns;



    }
}
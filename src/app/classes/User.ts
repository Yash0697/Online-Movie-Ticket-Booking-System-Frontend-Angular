export class User{
    id:string;
    type:string;
    name:string;
    password:string;
    phone:number;
    email:string;
    constructor(id:string, type:string, name:string, password:string, phone:number, email:string){
        this.id = id;
        this.type = type;
        this.name = name;
        this.password = password;
        this.phone = phone;
        this.email = email;
    }
}
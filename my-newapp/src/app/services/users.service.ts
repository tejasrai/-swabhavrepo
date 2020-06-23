import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}
   getAllUsers(){
     return [
      {id:101,name:'john',city:'DELHI',salary:2000,dob: new Date("05/10/1980")},
      {id:102,name:'lohn',city:'BELHI',salary:3000,dob: new Date("05/09/1970")},
      {id:103,name:'bohn',city:'GELHI',salary:4000,dob:  new Date("05/11/1990")},
      {id:104,name:'dohn',city:'KELHI',salary:5000,dob: new Date("05/12/1995")}
  
    ];
   }
}

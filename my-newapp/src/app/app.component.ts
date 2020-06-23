import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle:string="Services in angular";
  users:any[];
  
  constructor(private userService:UsersService){

  }
  ngOnInit(){
    this.users = this.userService.getAllUsers();
  }
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle:string ="Data Binding in Angular";
  btnstatus:boolean = false;
  username:string;
  constructor() { }

  ngOnInit() {
  }
  changeTitle(){
    this.pageTitle = "Title Changed.";
  }
  

}

import { Component } from '@angular/core';
import { StudentReg } from './student-reg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student reg';
  branches = ['A','B','C'];
  studentReg=new StudentReg(1, '','',false);

  submitted = false;

  onSubmit(){
    this.submitted = true;
    console.log('student Reg:',this.studentReg);
    
    
  }

  getCurrentReg(){
    return JSON.stringify(this.studentReg);
  }

}

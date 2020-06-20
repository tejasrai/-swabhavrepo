import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <div>
      
    <button (click)="passData()">Send data back to parent</button>
    </div>
  `,
  styles: [`
    div{
      background:Yellow;
      padding:20px;
    }`
  ]
})
export class Child2Component implements OnInit {
@Output()
notify:EventEmitter<string> = new EventEmitter<string>();
passData(){
  this.notify.emit("This message is coming from child component.");
}
  
}

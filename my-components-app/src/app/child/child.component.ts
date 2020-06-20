import { Component, Input } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-child',
  template: `
  <div><h3>This is a Child Component.-{{ uname }}</h3>
  
  </div>

  `,
  styles: [`
    div{
      background:lightblue;
      padding:20px;
    }`
  ]
})
export class ChildComponent  {
  @Input() 
  uname:string;
  
}

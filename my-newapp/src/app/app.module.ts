import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgePipe } from './pipes/age.pipe';
import {UsersService} from './services/users.service';
import { BindingComponent } from './binding/binding.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    BindingComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

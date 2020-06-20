import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import { pathToFileURL } from 'url';
const routes:Routes = [
  {path:"",redirectTo:'about',pathMatch:'full'},

  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",redirectTo:'about'},


];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

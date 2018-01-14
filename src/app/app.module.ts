import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import FormsModule to use ngModel in hero component.html
// after declare here, declare it in imports
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

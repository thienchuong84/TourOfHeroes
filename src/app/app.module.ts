import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import FormsModule to use ngModel in hero component.html
// after declare here, declare it in imports
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

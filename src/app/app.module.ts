import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventPageComponent } from './event-page/event-page.component';
import {HttpClientModule} from "@angular/common/http";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HeaderComponent } from './header/header.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventCardComponent } from './event-card/event-card.component';


@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    NotFoundPageComponent,
    CategoryPageComponent,
    HeaderComponent,
    EventsPageComponent,
    EventCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { EventPageComponent } from './event-page/event-page.component';
import {HttpClientModule} from "@angular/common/http";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HeaderComponent } from './header/header.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventCardComponent } from './event-card/event-card.component';
import { NewEventPageComponent } from './new-event-page/new-event-page.component';
import { EventFormComponent } from './event-form/event-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    NotFoundPageComponent,
    CategoryPageComponent,
    HeaderComponent,
    EventsPageComponent,
    EventCardComponent,
    NewEventPageComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

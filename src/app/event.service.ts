import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from 'src/app/model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
baseURL="/api/events/";

  constructor(private httpClient:HttpClient) { }

  readEvent(eventId:number):Observable<Event>{
    return this.httpClient.get<Event>(`${this.baseURL}${eventId}`);

  }

}

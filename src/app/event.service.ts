import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from 'src/app/model/event';
import {ListboxValueChangeEvent} from "@angular/cdk/listbox";

@Injectable({
  providedIn: 'root'
})
export class EventService {
baseURL="/api/events";

  constructor(private httpClient:HttpClient) {

  }

  saveEvent(event:Event):Observable<Event>{
    return  this.httpClient.post<Event>(`${this.baseURL}`,event);
  }

  readEvent(eventId:number):Observable<Event>{
    return this.httpClient.get<Event>(`${this.baseURL}/${eventId}`);
  }

  readEvents():Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseURL}`)
  }

  updateEvent(eventId:number, eventToUpdate:Event):Observable<Event>{
    return this.httpClient.put<Event>(`${this.baseURL}/${eventId}`,eventToUpdate);
  }

  deleteEvent(eventId:number):Observable<any>{
""
    return this.httpClient.delete<any>((`${this.baseURL}/${eventId}`));

  }



}

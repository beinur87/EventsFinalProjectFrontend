import {Component} from '@angular/core';
import {Event} from 'src/app/model/event';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {

  event: Event = new Event(1,
    "Zilele orasului Baia Mare",
    "Sarbatoarea Castanelor",
    "Baia-Mare",
    new Date(2023, 8, 28),
    new Date(2023,8,30));

  httpClient: HttpClient;
  route:ActivatedRoute;
  constructor(httpClient:HttpClient,route:ActivatedRoute) {
    this.httpClient=httpClient;
    this.route=route;
  }

  ngOnInit(){

    const eventid=this.route.snapshot.paramMap.get("id"); //sintaxa pe a accesa parametrul id din cadrul url-ului

    //accesam evenimentul cu id-ul 1 - response e obiectul pe care-l primim noi
    this.httpClient.get("/api/events/" + eventid).subscribe((response)=>{console.log(response);
    this.event=response as Event;
    this.event.startDate=new Date(this.event.startDate);
    this.event.endDate=new Date(this.event.endDate);
    })
  }

}


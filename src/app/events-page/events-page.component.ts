import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from 'src/app/model/event'
import {Router} from "@angular/router";
import {EventService} from "../event.service";

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent {

    events: Event[] = [];

    constructor (private eventService:EventService, private router:Router){}

  ngOnInit(){
      this.eventService.readEvents().subscribe(
        (response)=>{
          console.log(response);
          this.events=response as Event [];
          console.log(this.events);
        }
      );
  }

  navigateToEvent(e:Event){
      this.router.navigate(["/events/"+e.id]);
  }

}

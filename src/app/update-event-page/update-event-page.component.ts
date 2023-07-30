import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Event} from "../model/event";

@Component({
  selector: 'app-update-event-page',
  templateUrl: './update-event-page.component.html',
  styleUrls: ['./update-event-page.component.css']
})
export class UpdateEventPageComponent {

  updateEvent: Event |null=null;

  //http://localhost4200/update-event/5

  constructor (private activeRoute:ActivatedRoute, private httpClient:HttpClient){}

    ngOnInit(){
      var eventId=this.activeRoute.snapshot.paramMap.get('id');
      this.httpClient.get("/api/events/"+ eventId).subscribe(
        (response)=>{
          this.updateEvent=response as Event;
          if (this.updateEvent.startDate != null)
            this.updateEvent.startDate = new Date(this.updateEvent.startDate!);
          if (this.updateEvent.endDate != null)
            this.updateEvent.endDate = new Date(this.updateEvent.endDate!);
        }
      )
    }

}

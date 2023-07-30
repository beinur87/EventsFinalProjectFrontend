import { Component } from '@angular/core';
import {Event} from "../model/event";

@Component({
  selector: 'app-new-event-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css']
})
export class NewEventPageComponent {

  newEvent: Event = {
    id: null,
    name: "",
    description: "",
    location: "",
    startDate: null,
    endDate: null,
    imgURL: null
  }

}

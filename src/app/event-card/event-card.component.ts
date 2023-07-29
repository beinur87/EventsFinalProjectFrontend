import { Component } from '@angular/core';
import {Event} from "src/app/model/event";
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css',
  ]
})
export class EventCardComponent {

    event:Event = new Event(
      1,
      'Zilele Bucureștiului',
      'Concerte și mici cu muștar',
      'București',
      new Date('2023-10-10T10:00:00'),
      new Date('2023-10-13T23:00:00')
    );

}

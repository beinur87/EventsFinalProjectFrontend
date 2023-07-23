import {Component} from '@angular/core';
import {Event} from 'src/app/model/event';

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
    new Date(2023, 8, 28, ),
    new Date(2023,8,30));

}


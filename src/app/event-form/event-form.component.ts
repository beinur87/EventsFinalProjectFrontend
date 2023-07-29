import {Component} from '@angular/core';
import {Event} from "src/app/model/event";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {


  event: Event = {
    id: null,
    name: "",
    description: "",
    location: "",
    startDate: null,
    endDate: null
  }

  // un container pt toate casutele de input !!!
  eventForm: FormGroup = new FormGroup({

    nameInput: new FormControl(),
    descriptionInput: new FormControl(),
    locationInput: new FormControl(),

  });

}

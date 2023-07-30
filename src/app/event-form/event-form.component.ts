import {Component} from '@angular/core';
import {Event} from "src/app/model/event";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {


  constructor (private httpClient:HttpClient){
    this.httpClient=httpClient;
  }

  event: Event = {
    id: null,
    name: "",
    description: "",
    location: "",
    startDate: null,
    endDate: null,
    imgURL: null
  }

  // un container pt toate casutele de input !!!
  eventForm: FormGroup = new FormGroup({

    nameInput: new FormControl(),
    descriptionInput: new FormControl(),
    locationInput: new FormControl(),
    imgURLInput: new FormControl(),
    startDateInput: new FormControl(),
    endDateInput: new FormControl(),

  });

  saveEvent() {
    this.populateEventFromForm();
    this.httpClient.post("/api/events", this.event).subscribe(
      (response)=> {
            alert(JSON.stringify(response));
      }
    );

  }

  populateEventFromForm() {
    this.event.name = this.eventForm.value.nameInput;
    this.event.description = this.eventForm.value.descriptionInput;
    this.event.location = this.eventForm.value.locationInput;
    this.event.imgURL = this.eventForm.value.imgURLInput;
    this.event.startDate = this.eventForm.value.startDateInput;
    this.event.endDate = this.eventForm.value.endDateInput;
  }
}

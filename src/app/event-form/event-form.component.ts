import {Component,Input} from '@angular/core';
import {Event} from "src/app/model/event";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {


  constructor (private httpClient:HttpClient,
               private router:Router){
    this.httpClient=httpClient;
  }

  @Input()
  event: Event = {
    id: null,
    name: "",
    description: "",
    location: "",
    startDate: null,
    endDate: null,
    imgURL: null
  }

  // Event form-ul acesta este un container pt toate casutele de tip input !!!
  eventForm: FormGroup = new FormGroup({
    nameInput: new FormControl(),
    descriptionInput: new FormControl(),
    locationInput: new FormControl(),
    imgURLInput: new FormControl(),
    startDateInput: new FormControl(),
    endDateInput: new FormControl(),
  });

  ngOnInit() {
    console.log(this.event);
    this.eventForm = new FormGroup({
      nameInput: new FormControl(this.event.name),
      descriptionInput: new FormControl(this.event.description),
      locationInput: new FormControl(this.event.location),
      imgURLInput: new FormControl(this.event.imgURL),
      startDateInput: new FormControl(this.event.startDate),
      endDateInput: new FormControl(this.event.endDate),
    });
  }


  saveOrUpdateEvent() {
    this.populateEventFromForm();

    if (this.event.id == null) {
      this.httpClient.post('/api/events', this.event)
        .subscribe((response) => {
          var savedEvent = response as Event;
          this.router.navigate(['/events/' + savedEvent.id]);
        });
    }
    if(this.event.id != null) {
      this.httpClient.put('/api/events/' + this.event.id, this.event)
        .subscribe((response) => {
          this.router.navigate(['/events/' + this.event.id]);
        });
    }
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

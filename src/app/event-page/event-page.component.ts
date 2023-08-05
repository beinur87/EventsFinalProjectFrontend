import {Component} from '@angular/core';
import {Event} from 'src/app/model/event';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../event.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {


  event: Event = new Event(
    null,
    null,
    null,
    null,
    null,
    null,
    null)

  updateEventUrl: string = "";

  //httpClient: HttpClient;
  route: ActivatedRoute;

  constructor(private eventService: EventService, route: ActivatedRoute, private router: Router, private dialog:MatDialog) {
    // Private - ne scapa de necesitatea de la declara si asigna cu this.x in constructor)
    //this.httpClient = httpClient;
    this.route = route;

  }

  ngOnInit() {

    const eventId = this.route.snapshot.params["id"]; //sintaxa pe a accesa parametrul id din cadrul url-ului

    this.updateEventUrl="/update-event/"+eventId;

    //accesam evenimentul cu id-ul 1 - response e obiectul pe care-l primim noi
    //this.httpClient.get("/api/events/" + eventid).subscribe((response) => {
    this.eventService.readEvent(eventId).subscribe((response)=> {

        console.log(response)
        this.event = response as Event;//convertim response in Event
        if (this.event.startDate != null)
          this.event.startDate = new Date(this.event.startDate!);
        if (this.event.endDate != null)
          this.event.endDate = new Date(this.event.endDate!);
      },
      (error) => {
        console.log(error);
        if (error.error == "There is no event with id: " + eventId) {
          this.router.navigate(["/Page-not-found"])
        }
      });
  };

  public openConfirmationDialog(){
    var dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.actionConfirmedEvent.subscribe(
      actionConfirmed =>{
        if(actionConfirmed ==true){
          this.deleteEvent(this.event.id);
        }
      });
  }

  public deleteEvent(eventId:any){

    this.eventService.deleteEvent(eventId).subscribe(
      (response)=>{

        console.log("Event deleted!");

        this.router.navigate(["/events"]);

      },error =>
        console.log(error)
    );
  }

}

  // .subscribe(success, error) - subscribe-ul are 2 parametri unul in caz de success si unu in caz de fail!

  // .subscribe(()=>{}, ()=>{})




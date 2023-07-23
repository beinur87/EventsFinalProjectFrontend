import {Component} from '@angular/core';
import {Event} from 'src/app/model/event';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

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
    null);

  httpClient: HttpClient;
  route: ActivatedRoute;

  constructor(httpClient: HttpClient, route: ActivatedRoute, private router: Router) {
    // Private - ne scapa de necesitatea de la declara si asigna cu this.x in constructor)
    this.httpClient = httpClient;
    this.route = route;
  }

  ngOnInit() {

    const eventid = this.route.snapshot.paramMap.get("id"); //sintaxa pe a accesa parametrul id din cadrul url-ului

    //accesam evenimentul cu id-ul 1 - response e obiectul pe care-l primim noi
    this.httpClient.get("/api/events/" + eventid).subscribe((response) => {
        console.log(response)
        this.event = response as Event;//convertim respons in Event
        if (this.event.startDate != null)
          this.event.startDate = new Date(this.event.startDate!);
        if (this.event.endDate != null)
          this.event.endDate = new Date(this.event.endDate!);
      },
      (error) => {
        console.log(error);
        if (error.error == "There is no event with id: " + eventid) {
          this.router.navigate(["/Page-not-found"])
        }
      });
  };
}

  // .subscribe(success, error) - subscribe-ul are 2 parametri unul in caz de success si unu in caz de fail!

  // .subscribe(()=>{}, ()=>{})




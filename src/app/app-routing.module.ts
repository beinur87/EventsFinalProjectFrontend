import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventPageComponent} from "./event-page/event-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {CategoryPageComponent} from "./category-page/category-page.component";
import {EventsPageComponent} from "./events-page/events-page.component";
import {NewEventPageComponent} from "./new-event-page/new-event-page.component";
import {UpdateEventPageComponent} from "./update-event-page/update-event-page.component";

const routes: Routes = [
  {path: "events/:id", component: EventPageComponent},

  {path: "categories/:id", component: CategoryPageComponent},

  {path: "Page-not-found", component: NotFoundPageComponent},

  {path: "events", component: EventsPageComponent},

  {path: "new-event", component: NewEventPageComponent},

  {path: "update-event/:id", component: UpdateEventPageComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

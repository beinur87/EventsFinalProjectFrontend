import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventPageComponent} from "./event-page/event-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";

const routes: Routes = [{
  path:"events/:id" , component:EventPageComponent
},
  {path:"Page-not-found",
  component:NotFoundPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

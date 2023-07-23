import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventPageComponent} from "./event-page/event-page.component";

const routes: Routes = [{
  path:"events/:id" , component:EventPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

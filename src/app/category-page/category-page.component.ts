import { Component } from '@angular/core';
import {Category} from "../model/category";
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})


export class CategoryPageComponent {

  category: Category = new Category(
    null,
    null);

  route: ActivatedRoute;

  constructor(private categoryService: CategoryService, route: ActivatedRoute, private router: Router) {
    this.route = route;
  }

  ngOnInit() {
    const categoryid = this.route.snapshot.params["id"];
      //sintaxa pe a accesa parametrul id din cadrul url-ului

    this.categoryService.readEvent(categoryid).subscribe((response)=>{
      console.log(response)
      this.category=response as Category
    })

  }

}

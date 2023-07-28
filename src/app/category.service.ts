import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "./model/event";
import {Category} from "./model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseURL="/api/categories/";

  constructor(private httpClient:HttpClient) { }

  readEvent(categoryId:number):Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}${categoryId}`);

  }

}

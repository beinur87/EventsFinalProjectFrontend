import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "src/app/model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseURL="/api/category";

  constructor(private httpClient:HttpClient) { }

  readEvent(categoryId:number):Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}/${categoryId}`);

  }

}

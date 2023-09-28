import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CategoryModel } from '../models/CategoryModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private controllerIrl: string = environment.BASE_API_URL + 'categories';

  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.controllerIrl);
  }
}

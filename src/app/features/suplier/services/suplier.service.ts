import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Supplier } from '../models/Supplier';

@Injectable({
  providedIn: 'root',
})
export class SuplierService {
  private controllerIrl: string = environment.BASE_API_URL + 'suppliers';

  constructor(private httpClient: HttpClient) {}

  getAllSuppliers(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.controllerIrl);
  }
}

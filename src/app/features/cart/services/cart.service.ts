import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GetAllOrders } from '../../order/models/GetAllOrders';
import { State, Store } from '@ngrx/store';
import { SharedState } from 'src/app/shared/store/shared.reducers';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private controllerUrl: string = environment.BASE_API_URL + 'orders';
  private controllerUrlforOrder: string =
    environment.BASE_API_URL + 'orderDetails';
  model: any = [];
  constructor(
    private httpClient: HttpClient,
    private state: Store<SharedState>
  ) {}

  fetchAllOrders(): Observable<GetAllOrders[]> {
    return this.httpClient.get<GetAllOrders[]>(this.controllerUrl);
  }

  submitOrder() {
    console.log('sipariş tamamlandı');
    this.state
      .select((s) => s.cart)
      .subscribe((cart) => {
        this.model = cart;
      });
    console.log(this.model);
    return this.httpClient.post(this.controllerUrlforOrder, this.model);
  }
}

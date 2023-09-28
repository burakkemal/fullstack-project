import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addItemToCart,
  removeItemFromCart,
} from 'src/app/shared/store/cart/cart.actions';
import { SharedState } from 'src/app/shared/store/shared.reducers';
import { CartService } from '../../services/cart.service';

@Component({
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  cart: any[] = [];
  constructor(
    private store: Store<SharedState>,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.store
      .select((s) => s.cart)
      .subscribe((cart) => {
        this.cart = cart;
      });
  }

  remove(item: any) {
    this.store.dispatch(removeItemFromCart({ id: item.id }));
  }
  increase(item: any) {
    this.store.dispatch(addItemToCart({ product: item.product, quantity: 1 }));
  }
  decrease(item: any) {
    debugger;
    if (item.quantity == 1) this.remove(item);
    else
      this.store.dispatch(
        addItemToCart({ product: item.product, quantity: -1 })
      );
  }
  completeOrder() {
    this.cartService.submitOrder().subscribe((response) => {
      console.log('success');
    });
  }
}

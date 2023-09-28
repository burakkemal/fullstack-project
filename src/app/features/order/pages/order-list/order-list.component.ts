import { CartService } from 'src/app/features/cart/services/cart.service';
import { GetAllOrders } from './../../models/GetAllOrders';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  Orders: GetAllOrders[] = [];

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.fetchOrders();
  }
  fetchOrders() {
    this.cartService.fetchAllOrders().subscribe((response) => {
      this.Orders = response;
    });
  }
}

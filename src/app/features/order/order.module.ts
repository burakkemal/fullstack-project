import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderCardComponent } from './components/order-card/order-card.component';

@NgModule({
  declarations: [
    OrderListComponent,
    OrderCardComponent
  ],
  imports: [CommonModule, OrderRoutingModule],
})
export class OrderModule {}

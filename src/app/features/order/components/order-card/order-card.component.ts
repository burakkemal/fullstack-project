import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent {
  @Input() shipName!: string;
  @Input() shipAddress!: string;
  @Input() shipCountry!: string;
  @Input() shipCity!: string;
}

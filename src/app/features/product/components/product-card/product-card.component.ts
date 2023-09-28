import { Store, on } from '@ngrx/store';
import {
  SharedState,
  sharedReducers,
} from './../../../../shared/store/shared.reducers';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { addItemToCart } from 'src/app/shared/store/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() imgUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() id!: number;
  @Output() onDelete = new EventEmitter();

  constructor(
    private productService: ProductService,
    private store: Store<SharedState>
  ) {}

  deleteProduct() {
    this.productService.delete(this.id).subscribe(() => {
      this.onDelete.emit();
    });
  }

  addToCart() {
    this.store.dispatch(
      addItemToCart({
        product: { id: this.id, name: this.title, unitPrice: this.price },
        quantity: 1,
      })
    );
  }
}

//  Order sayfası => Responsive (ekranda 3er 3er sıralanmış productlar vb..)

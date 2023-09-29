import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LazyLoadImageModule,
  ],
})
export class ProductModule {}

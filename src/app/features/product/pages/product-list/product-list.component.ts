import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: any[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.productService.getAll().subscribe((response) => {
      this.productList = response;
      console.log(response);
    });
  }
}

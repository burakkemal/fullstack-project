import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: any[] = [];
  constructor(
    private productService: ProductService,
    private titleService: Title,
    private metaService: Meta
  ) {
    titleService.setTitle('Etiya - Ürün Listesi');
    metaService.addTag({
      name: 'keywords',
      content: 'ürünler,ürün listesi,e-ticaret',
    });
  }
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

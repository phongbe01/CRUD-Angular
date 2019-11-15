import { Component, OnInit, OnChanges } from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductInterfaceService, Products} from '../services/product-interface.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [{provide: ProductInterfaceService, useClass: ProductService }]
})
export class ProductsComponent implements OnInit {
  products: Products[];
  constructor(private productService: ProductInterfaceService, private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  onClick(index: number) {
    return this.productService.getById(index);
  }
}

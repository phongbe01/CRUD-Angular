import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductInterfaceService, Products} from '../../services/product-interface.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  ProductDetail: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private productService: ProductService, private  fb: FormBuilder, private productInterfaceService: ProductInterfaceService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    const product = this.productService.getById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
    this.ProductDetail = this.fb.group({
      name: [product.name, [Validators.required, Validators.minLength(4)]],
      price: [product.price,  Validators.required],
      desc: [product.description, Validators.required],
      rating: [product.rating, Validators.required],
      quality: [product.quality, Validators.required],
      providers: [{provide: ProductInterfaceService, useClass: ProductService }]
    });
  }
  onSubmit() {
  }
  onClick() {
    console.log(this.ProductDetail.value);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductInterfaceService} from '../../services/product-interface.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: FormGroup;
  id = +this.activatedRoute.snapshot.paramMap.get('id');
  constructor(private productService: ProductService,
              private  fb: FormBuilder,
              private productInterfaceService: ProductInterfaceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    const product = this.productService.getById(this.id);
    this.productDetail = this.fb.group({
      name: [product.name, [Validators.required, Validators.minLength(4)]],
      price: [product.price,  Validators.required],
      desc: [product.description, Validators.required],
      rating: [product.rating, Validators.required],
      quality: [product.quality, Validators.required],
    });
  }
  onClick() {
    this.productService.update(this.productDetail.value, this.id);
    this.router.navigate(['/products']);
  }
}

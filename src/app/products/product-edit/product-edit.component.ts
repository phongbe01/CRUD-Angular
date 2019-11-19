import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {ProductInterfaceService} from '../../services/product-interface.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProduct: FormGroup;
  id = +this.activatedRoute.snapshot.paramMap.get('id');
  constructor(
    private productService: ProductService,
    private  fb: FormBuilder,
    private productInterfaceService: ProductInterfaceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const product = this.productService.getById(this.id);
    this.editProduct = this.fb.group({
      name: [product.name, [Validators.required, Validators.minLength(4)]],
      price: [product.price,  Validators.required],
      description: [product.description, Validators.required],
      rating: [product.rating, Validators.required],
      quality: [product.quality, Validators.required],
    });
  }
  onClick() {
    console.log(this.editProduct.value);
    this.productService.update(this.editProduct.value, this.id);
    this.router.navigate(['/products']);
  }
  get name() { return this.editProduct.get('name'); }
  get price() { return this.editProduct.get('price'); }
  get description() { return this.editProduct.get('description'); }
  get quality() { return this.editProduct.get('quality'); }
  get rating() { return this.editProduct.get('rating'); }
}

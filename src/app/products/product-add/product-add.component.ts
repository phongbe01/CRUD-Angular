import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addProduct: FormGroup;
  title = 'Add product';
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.addProduct = this.fb.group({
      name: ['', [ Validators.required]],
      price: ['', [ Validators.required]],
      desc: ['', [ Validators.required]],
      rating: ['', [ Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.addProduct.value);
  }
  get name() { return this.addProduct.get('name'); }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  title = 'Add product';
  constructor(private fb: FormBuilder) { }
  addProduct = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['',  Validators.required],
    desc: ['', Validators.required],
    rating: ['', Validators.required]
  });
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.addProduct.value);
  }
  get name() { return this.addProduct.get('name'); }
}

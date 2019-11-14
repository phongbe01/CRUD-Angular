import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products =  [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      quality: 10,
      rating: 5,
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      quality: 12,
      rating: 3,
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
      quality: 20,
      rating: 4,
    },
    {
      name: 'Phone SamSung',
      price: 250,
      description: 'Black',
      quality: 5,
      rating: 1,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

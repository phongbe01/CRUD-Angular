import { Injectable } from '@angular/core';
import { ProductInterfaceService} from './product-interface.service';
import {IProduct} from '../products/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductInterfaceService {
     products: IProduct[] = [
      {
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        quality: 10,
        rating: 5,
      },
      {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        quality: 12,
        rating: 3,
      },
      {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        description: '',
        quality: 20,
        rating: 4,
      },
      {
        id: 4,
        name: 'Phone SamSung',
        price: 250,
        description: 'Black',
        quality: 5,
        rating: 1,
      }
    ];

  constructor() { }

  getProducts(): IProduct[] {
    return this.products;
  }

  getById(id: number): IProduct {
    for (const product of this.products) {
      if (product.id === id) {
        return product;
      }
    }
  }
  update(data: IProduct, index: number) {
    const  product = this.getById(index);
    product.name = data.name;
    product.price = data.price;
    product.description = data.description;
    product.quality = data.quality;
    product.rating = data.rating;
    this.products[index - 1] = product;
  }

}

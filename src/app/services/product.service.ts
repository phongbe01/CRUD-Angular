import { Injectable } from '@angular/core';
import { ProductInterfaceService, Products} from './product-interface.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductInterfaceService {
  getProducts(): Products[] {
    const products: Products[] = [
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
    return products;
  }
  getById(id: number): Products {
    for (const product of this.getProducts()) {
      if (product.id === id) {
        return product;
      }
    }
  }
  constructor() { }

}

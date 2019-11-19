import { Injectable } from '@angular/core';
import {IProduct} from '../products/iproduct';

@Injectable({
  providedIn: 'root'
})

export abstract class ProductInterfaceService {

  abstract getProducts(): IProduct[];
  abstract getById(id): IProduct;
  abstract update(product: IProduct, index: number);
}

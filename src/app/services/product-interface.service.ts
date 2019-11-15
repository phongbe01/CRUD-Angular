import { Injectable } from '@angular/core';

export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  quality: number;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})

export abstract class ProductInterfaceService {

  abstract getProducts(): Products[];
  abstract getById(id): Products;
}

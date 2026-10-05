import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      category: 'electronics',
      stock: 15,
    },
    {
      id: 2,
      name: 'Keyboard',
      price: 75,
      category: 'electronics',
      stock: 40,
    },
    {
      id: 3,
      name: 'Office Chair',
      price: 250,
      category: 'furniture',
      stock: 10,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }
}

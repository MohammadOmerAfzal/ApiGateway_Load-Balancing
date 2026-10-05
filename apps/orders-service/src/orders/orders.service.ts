import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Order } from './order.interface';

@Injectable()
export class OrdersService {
  constructor(private readonly httpService: HttpService) {}
  private readonly orders: Order[] = [
    {
      id: 1,
      userId: 1,
      productIds: [1, 2],
      total: 1275,
      status: 'confirmed',
    },
    {
      id: 2,
      userId: 2,
      productIds: [3],
      total: 250,
      status: 'pending',
    },
    {
      id: 3,
      userId: 3,
      productIds: [2, 3],
      total: 325,
      status: 'confirmed',
    },
  ];

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number): Order {
    const order = this.orders.find((order) => order.id === id);

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }
  
  async validateProduct(productId: number){
   const response = await firstValueFrom(
    this.httpService.get(
      `http://products-service:3000/api/products/${productId}`  
    ),
   );

   return response.data;
  }
}

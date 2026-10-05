import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import type { Order } from './order.interface';
import { OrdersService } from './orders.service';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll(): Order[] {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Order {
    return this.ordersService.findOne(id);
  }

  @Get(':id/validate-product/:productId')
  async validateProduct(
    @Param('productId', ParseIntPipe) productId: number,) {
    return this.ordersService.validateProduct(productId);
  }
}

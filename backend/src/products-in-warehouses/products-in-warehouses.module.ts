import { Module } from '@nestjs/common';
import { ProductsInWarehousesService } from './products-in-warehouses.service';
import { ProductsInWarehousesController } from './products-in-warehouses.controller';

@Module({
  providers: [ProductsInWarehousesService],
  controllers: [ProductsInWarehousesController]
})
export class ProductsInWarehousesModule {}

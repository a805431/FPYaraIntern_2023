import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsInWarehousesService } from './products-in-warehouses.service';
import { ProductsInWarehousesController } from './products-in-warehouses.controller';
import { ProductInWarehouse } from './products-in-warehouses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInWarehouse])],
  providers: [ProductsInWarehousesService],
  controllers: [ProductsInWarehousesController]
})
export class ProductsInWarehousesModule {}

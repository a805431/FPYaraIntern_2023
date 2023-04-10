import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehousesModule } from './warehouses/warehouses.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Warehouse } from './warehouses/warehouse.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'warehousedb',
    schema: 'public',
    username: 'postgres',
    password: 'alice',
    entities: [User, Warehouse, Product],
    synchronize: true,
    }
  ), WarehousesModule, UsersModule, ProductsModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

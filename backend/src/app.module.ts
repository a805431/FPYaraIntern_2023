import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehousesModule } from './warehouses/warehouses.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [WarehousesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

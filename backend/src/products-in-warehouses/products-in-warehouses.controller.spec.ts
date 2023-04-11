import { Test, TestingModule } from '@nestjs/testing';
import { ProductsInWarehousesController } from './products-in-warehouses.controller';

describe('ProductsInWarehousesController', () => {
  let controller: ProductsInWarehousesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsInWarehousesController],
    }).compile();

    controller = module.get<ProductsInWarehousesController>(ProductsInWarehousesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

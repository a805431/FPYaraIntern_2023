import { Test, TestingModule } from '@nestjs/testing';
import { ProductsInWarehousesService } from './products-in-warehouses.service';

describe('ProductsInWarehousesService', () => {
  let service: ProductsInWarehousesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsInWarehousesService],
    }).compile();

    service = module.get<ProductsInWarehousesService>(ProductsInWarehousesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

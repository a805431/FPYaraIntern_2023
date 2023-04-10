import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Warehouse } from './warehouse.entity';
import { CreateWarehouseDto } from './dtos/create-warehouse.dto';

@Injectable()
export class WarehousesService {
    constructor(@InjectRepository(Warehouse) private repo: Repository<Warehouse>) {
        
    }

    create(warehouseDto: CreateWarehouseDto) {
        const warehouse = this.repo.create(warehouseDto);

        return this.repo.save(warehouse);
    }
}

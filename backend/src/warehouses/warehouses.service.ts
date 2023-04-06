import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Warehouse } from './warehouse.entity';

@Injectable()
export class WarehousesService {
    constructor(@InjectRepository(Warehouse) private repo: Repository<Warehouse>) {
        
    }
}

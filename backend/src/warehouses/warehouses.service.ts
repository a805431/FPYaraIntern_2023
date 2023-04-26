import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Warehouse } from './warehouse.entity';

@Injectable()
export class WarehousesService {
    constructor(@InjectRepository(Warehouse) private repo: Repository<Warehouse>) {
        
    }

    async findaAll() {
        const warehouses = await this.repo.find();
        return warehouses;
    }

    //for testing purposes, the state argument is inferred to be part of attr and 
    //therefore optional, since the WarehouseState entity is not created yet
    //in the future a WarehouseState table will be created upon every Warehouse table creation
    create(name: string, capacity: number, attrs: Partial<Warehouse>) {
        const warehouse = this.repo.create(Object.assign({name, capacity}, attrs));

        return this.repo.save(warehouse);
    }

    findOneBy(id: number) {
        if (!id) {
            return null;
        }
        return this.repo.findOneBy({ id });
    }

    find(name: string) {
        return this.repo.find({ where: { name: name } });
    }

    async update(id: number, attrs: Partial<Warehouse>) {
        const warehouse = await this.findOneBy(id);
        if (!warehouse) {
            throw new NotFoundException('No Such Warehouse!');
        }
        //copies new props and overwrites old ones of the target object,
        //which is warehouse in this case
        //but the object props have to be among the ones, specified in the target
        //object's entity class
        Object.assign(warehouse, attrs);
        return this.repo.save(warehouse);
    }

    async remove(id: number) {
        const warehouse = await this.findOneBy(id);

        if(!warehouse) {
            throw new NotFoundException('Cannot remove unexisting warehouse.');
        }
        return this.repo.remove(warehouse);
    }
}

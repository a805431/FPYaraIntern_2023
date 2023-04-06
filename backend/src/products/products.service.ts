import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private repo: Repository<Product>) {

    }

    create(name: string, unitsize: number, unitprice: number, ishazardous: boolean) {
        const product = this.repo.create({ name, unitsize, unitprice, ishazardous });

        return this.repo.save(product);
    }
}

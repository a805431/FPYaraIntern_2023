import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private repo: Repository<Product>) {

    }

    async findAll() {
        const products =  await this.repo.find();
        return products;
    }

    create(name: string, unitSize: number, unitPrice: number, isHazardous: boolean) {
        const product = this.repo.create({ name, unitSize, unitPrice, isHazardous});

        return this.repo.save(product);
    }

    findOneBy(id: number) {
        if (!id) {
            return null;
        }
        return this.repo.findOneBy({ id });
    }

    find(name: string) {
        return this.repo.find({ where: { name } });
    }

    async update(id: number, attrs: Partial<Product>) {
        const product = await this.findOneBy(id);

        if (!product) {
            throw new NotFoundException('No Such Product!');
        }
        Object.assign(product, attrs);
        return this.repo.save(product);
    }

    async remove(id: number) {
        const product = await this.findOneBy(id);

        if(!product) {
            throw new NotFoundException('Cannot remove unexisting product.');
        }
        return this.repo.remove(product);
    }

}

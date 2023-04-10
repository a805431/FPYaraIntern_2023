import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { User } from '../users/user.entity';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class TransactionService {
    @Inject(ProductsService)
    private readonly productsService: ProductsService;
    
    constructor(@InjectRepository(Transaction) private repo: Repository<Transaction>) {

    }

    async create(transactionDto: CreateTransactionDto, user: User) {
        const transaction = this.repo.create(transactionDto);
        transaction.user = user;

        const productIdInput = transaction.productId;

        //if a product with such an id exists in the db,
        //return it, else return an error
        const product = await this.productsService.findOneBy(productIdInput);
        if (!product) {
            throw new NotFoundException('No such product!');
        } 
        
        transaction.product = product;
        return this.repo.save(transaction);
    }
}

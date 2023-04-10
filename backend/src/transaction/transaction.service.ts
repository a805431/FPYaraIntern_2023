import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { CreateTransactionDto } from './dtos/create-transaction.dto';

@Injectable()
export class TransactionService {
    constructor(@InjectRepository(Transaction) private repo: Repository<Transaction>) {

    }

    create(transactionDto: CreateTransactionDto) {
        const transaction = this.repo.create(transactionDto);

        return this.repo.save(transaction);
    }
}

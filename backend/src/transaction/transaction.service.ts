import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { User } from '../users/user.entity';

@Injectable()
export class TransactionService {
    constructor(@InjectRepository(Transaction) private repo: Repository<Transaction>) {

    }

    create(transactionDto: CreateTransactionDto, user: User) {
        const transaction = this.repo.create(transactionDto);
        transaction.user = user;

        return this.repo.save(transaction);
    }
}

import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService) {

    }

    @Post()
    @UseGuards(AuthGuard)
    createTransaction(@Body() body: CreateTransactionDto) {
        return this.transactionService.create(body);
    }
}

import { IsInt } from 'class-validator';

export class CreateTransactionDto {

    @IsInt()
    userId: number;

    @IsInt()
    productId: number;

    @IsInt()
    type: number;

    @IsInt()
    quantity: number;
}
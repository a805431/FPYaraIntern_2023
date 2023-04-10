import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Transaction } from 'src/transaction/transaction.entity';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false, type: 'smallint'})
    unitsize: number;

    @Column({nullable: false, type: 'decimal', precision: 12, scale: 2})
    unitprice: number;

    @Column({nullable: false, type: 'boolean'})
    ishazardous: boolean;

    @OneToMany(() => Transaction, (transaction) => transaction.product)
    transactions: Transaction [];
}
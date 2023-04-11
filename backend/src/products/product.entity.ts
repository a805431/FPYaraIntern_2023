import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Transaction } from 'src/transaction/transaction.entity';
import { ProductInWarehouse } from 'src/products-in-warehouses/products-in-warehouses.entity';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({name: "unitSize", nullable: false, type: 'smallint'})
    unitSize: number;

    @Column({name: "unitPrice",nullable: false, type: 'decimal', precision: 12, scale: 2})
    unitPrice: number;

    @Column({name: "isHazardous", nullable: false, type: 'boolean'})
    isHazardous: boolean;

    @OneToMany(() => Transaction, (transaction) => transaction.product)
    transactions: Transaction [];

    @OneToMany(() => ProductInWarehouse, productInWarehouse => productInWarehouse.product)
    productInWarehouses: ProductInWarehouse []
}
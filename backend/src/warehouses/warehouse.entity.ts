import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductInWarehouse } from 'src/products-in-warehouses/products-in-warehouses.entity';

@Entity()
export class Warehouse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false, type: 'smallint'})
    capacity: number;

    @Column({nullable: true, type: 'int4'})
    state: number;

    @OneToMany(() => ProductInWarehouse, productInWarehouse => productInWarehouse.product)
    productInWarehouses: ProductInWarehouse []

}
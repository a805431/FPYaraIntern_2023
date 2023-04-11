import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';
import { Warehouse } from '../warehouses/warehouse.entity';

@Entity()
export class ProductInWarehouse {

    @PrimaryColumn()
    productId: number;

    @PrimaryColumn()
    warehouseId: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Product, (product) => product.productInWarehouses)
    product: Product

    @ManyToOne(() => Warehouse, (warehouse) => warehouse.productInWarehouses)
    warehouse: Warehouse
}
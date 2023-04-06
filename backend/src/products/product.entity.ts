import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
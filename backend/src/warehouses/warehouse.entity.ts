import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Warehouse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false, type: 'smallint'})
    capacity: number;

    @Column({type: 'int4'})
    state: number;

}
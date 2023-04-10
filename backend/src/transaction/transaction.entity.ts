import { Entity, Column, PrimaryGeneratedColumn, 
        Check, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
@Check(`"type" = -1 OR "type" = 1`)
@Check(`"quantity" > 0`)
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'userId', nullable: false, type: 'int4'})
    userId: number;

    @Column({name: 'productId', nullable: false, type: 'int4'})
    productId: number;

    @Column({nullable: false, type: 'smallint'})
    type: number;

    @Column({type: 'timestamptz'})
    @CreateDateColumn()
    date: Date;

    @Column({nullable: false, type: 'int4'})
    quantity: number;

    @ManyToOne(() => User, (user) => user.transactions)
    user: User;
}
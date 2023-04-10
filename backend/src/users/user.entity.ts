import { AfterInsert, 
        AfterRemove,
        AfterUpdate,
        Entity, Column, PrimaryGeneratedColumn,
        OneToMany } from 'typeorm';
import { Transaction } from 'src/transaction/transaction.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id: ', this.id);
    }

    @AfterUpdate() 
    logUpdate(){
        console.log('Updated User with id: ', this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log("Removed User with id: ", this.id);
    }

    @OneToMany(() => Transaction, (transaction) => transaction.user)
    transactions: Transaction [];

}
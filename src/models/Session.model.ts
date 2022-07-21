import { SessionTypeEnum } from '../interface';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User.model';

@Entity('Session')
export class Session {
    
    @PrimaryGeneratedColumn('uuid')
    id: number
    
    @Column()
    token: string

    @Column({type: 'enum', enum: SessionTypeEnum})
    type: SessionTypeEnum
    
    @Column({name: 'expires_date'})
    expiresDate: Date
    
    @OneToOne(() => User, user => user.session)
    @JoinColumn({name: 'user_id'})
    user: User
}
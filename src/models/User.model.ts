import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Session } from "./Session.model"
import { ToDo } from "./ToDo.model"

@Entity('User')
export class User {
  
  @PrimaryGeneratedColumn('uuid')
  readonly id: string
  
  @Column()  
  name: string
  
  @Column()  
  email: string
  
  @Column()  
  password: string
  
  @Column({name: 'create_at', default: Date.now()})  
  createAt: string
  
  @Column({name: 'update_at', default: Date.now()})  
  updateAt: string


  @OneToMany(() => ToDo, ToDo => ToDo.user)
  todoList: ToDo[]

  @OneToOne(() => Session, session => session.user, {
    eager: true
  })
  session: Session
}
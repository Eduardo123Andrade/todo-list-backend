import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
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
}
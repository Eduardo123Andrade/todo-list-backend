import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User.model"


@Entity('To_do')
export class ToDo {

  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  status: string

  @ManyToOne(() => User, user => user.todoList, {
    cascade: ['insert', 'remove']
  })
  @JoinColumn({name: 'user_id'})
  user: User

  @Column({ name: 'create_at', default: Date.now() })
  createAt: string

  @Column({ name: 'update_at', default: Date.now() })
  updateAt: string

}
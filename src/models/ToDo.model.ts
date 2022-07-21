import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


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

  @Column({ name: 'create_at', default: Date.now() })
  createAt: string

  @Column({ name: 'update_at', default: Date.now() })
  updateAt: string

}
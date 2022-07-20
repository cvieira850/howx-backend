import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { State } from './state'

@Entity({ name: 'cities' })
export class City {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  description!: string

  @ManyToOne(() => State)
  @JoinColumn({name: 'state_id'})
  state!: State

  @Column()
  state_id!: string

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn({ nullable: true })
  updated_at!: Date

  @DeleteDateColumn({ nullable: true })
  deleted_at!: Date
}

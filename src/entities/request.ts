import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Client } from './client'

@Entity({ name: 'requests' })
export class Request {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  value!: number

  @Column()
  type_payment!: string

  @ManyToOne(() => Client)
  @JoinColumn({name: 'client_id'})
  client!: Client

  @Column({ nullable: true })
  client_id!: string

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn({ nullable: true })
  updated_at!: Date

  @DeleteDateColumn({ nullable: true })
  deleted_at!: Date
}

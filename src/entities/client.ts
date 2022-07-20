import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Address } from './address'

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  id!: string

  @Column({ nullable: true })
  cpf!: string

  @Column()
  name!: string

  @Column({ nullable: true })
  email!: string

  @Column({ nullable: true })
  phone!: string

  @ManyToOne(() => Address)
  @JoinColumn({name: 'address_id'})
  address!: Address

  @Column({ nullable: true })
  address_id!: string

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn({ nullable: true })
  updated_at!: Date

  @DeleteDateColumn({ nullable: true })
  deleted_at!: Date
}

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { City } from './city'

@Entity({ name: 'addresses' })
export class Address {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  cep!: string

  @Column()
  district!: string

  @Column()
  street!: string

  @Column()
  number!: number

  @Column()
  complement!: string

  @ManyToOne(() => City)
  @JoinColumn({name: 'city_id'})
  city!: City

  @Column()
  city_id!: string

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn({ nullable: true })
  updated_at!: Date

  @DeleteDateColumn({ nullable: true })
  deleted_at!: Date
}

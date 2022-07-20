import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Category } from './category'

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  description!: string

  @Column()
  price!: number

  @Column()
  quantity!: number

  @ManyToOne(() => Category)
  @JoinColumn({name: 'category_id'})
  category!: Category

  @Column()
  category_id!: string

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn({ nullable: true })
  updated_at!: Date

  @DeleteDateColumn({ nullable: true })
  deleted_at!: Date
}

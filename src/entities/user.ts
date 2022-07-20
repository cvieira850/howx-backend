import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Role } from './role'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @ManyToOne(() => Role)
  @JoinColumn({name: 'role_id'})
  role!: Role

  @Column()
  role_id!: string

  @Column({ nullable: true })
  access_token?: string

  @Column({ nullable: true })
  reset_password_token?: string

  @Column({ nullable: true })
  reset_password_token_expires_at?: Date

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn({ nullable: true })
  updated_at!: Date

  @DeleteDateColumn({ nullable: true })
  deleted_at!: Date
}

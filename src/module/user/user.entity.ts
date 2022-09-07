import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id?: number

    @Column({ type: 'varchar', length: 40 })
    public name?: string

    @Column({ type: 'varchar', length: 60 })
    public phone: string

    @Column({ type: 'varchar', length: 60 })
    public password: string

    @Column({ type: 'varchar', length: 120, default: '0' })
    public avatar?: string

    @Column({ type: 'varchar', length: 60, default: '1' })
    public active?: string

    @Column({ type: 'varchar', length: 60, default: 'user' })
    public permissions?: string | any

    /*
     * Create and Update Date Columns
     */
    @CreateDateColumn({ type: 'timestamp' })
    public createdAt?: Date

    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt?: Date
}
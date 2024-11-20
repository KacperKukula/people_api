import  { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 64 })
    name: string

    @Column({ type: 'varchar', length: 64 })
    surname: string

    @Column({ type: 'varchar', length: 32, nullable: true })
    email: string

    @Column({ type: 'varchar', length: 200, nullable: true, })
    description: string

    @Column({ type: 'varchar', length: 64, nullable: true })
    profession: string

    @Column({ type: 'char', length: 1 })
    gender: string
}
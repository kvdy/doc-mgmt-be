
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Document } from '../documents/document.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    passwordHash: string;

    @Column({ default: 'user' })
    role: string;

    @OneToMany(() => Document, (document) => document.user)
    documents: Document[];
}


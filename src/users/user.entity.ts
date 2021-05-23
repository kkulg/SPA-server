import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: null,
  })
  username: string;

  @Column()
  email: string;

  @Column({
    default: null,
  })
  phone: string;

  @Exclude()
  @Column()
  password: string;

  constructor(partial?: Partial<User>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}

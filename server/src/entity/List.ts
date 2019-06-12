import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity("List")
export class List extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  title: string;

  @Column("simple-array")
  ids: string[];

  @ManyToOne(_type => User, user => user.lists)
  user: User;
}

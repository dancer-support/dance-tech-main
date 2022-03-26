import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

@Entity()
class User implements IUser {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public name: string;
  @Column()
  public email: string;

  constructor(id?: number, name?: string, email?: string) {
    this.id = id || -1;
    this.name = name || "";
    this.email = email || "";
  }
}

export default User;

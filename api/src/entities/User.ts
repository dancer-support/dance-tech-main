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

  constructor(nameOrUser: string | IUser, email?: string, id?: number) {
    if (typeof nameOrUser === "string") {
      this.name = nameOrUser;
      this.email = email || "";
      this.id = id || -1;
    } else {
      this.name = nameOrUser.name;
      this.email = nameOrUser.email;
      this.id = nameOrUser.id;
    }
  }
}

export default User;

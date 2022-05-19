import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Performance from "./Performance";

export interface ITheater {
  id: number;
  name: string;
  location: string;
  performances: Performance[];
}

@Entity()
class Theater implements ITheater {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column()
  public name!: string;
  @Column()
  public location!: string;

  @OneToMany(
    () => Performance,
    (performance: Performance) => performance.theater
  )
  public performances!: Performance[];
}

export default Theater;

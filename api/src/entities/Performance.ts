import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Dancer from "./Dancer";

export interface IPerformance {
  id: number;
  title: string;
  description?: string;
  image_url?: string;
  start_at?: string;
  dancers: Dancer[] | null;
  created_at: Date;
  updated_at: Date;
}

@Entity()
class Performance implements IPerformance {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column()
  public title!: string;
  @Column()
  public description!: string;
  @Column()
  public image_url!: string;
  @Column()
  public start_at!: string;

  @ManyToMany(() => Dancer)
  @JoinTable()
  public dancers!: Dancer[] | null;

  @CreateDateColumn({ name: "created_at", type: "timestamp", precision: 0 })
  readonly created_at!: Date;
  @UpdateDateColumn({ name: "updated_at", type: "timestamp", precision: 0 })
  readonly updated_at!: Date;
}

export default Performance;

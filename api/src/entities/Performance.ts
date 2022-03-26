import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface IPerformance {
  id: number;
  title: string;
}

@Entity()
class Performance implements IPerformance {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public title: string;

  constructor(id?: number, title?: string) {
    this.id = id || -1;
    this.title = title || "";
  }
}

export default Performance;

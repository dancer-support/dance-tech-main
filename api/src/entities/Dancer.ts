import {
  AfterLoad,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export interface IDancer {
  id: number;
  first_name_en: string;
  last_name_en: string;
  description?: string;
  image_url?: string;
  created_at: Date;
  updated_at: Date;
}

@Entity()
class Dancer implements IDancer {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column()
  public first_name_en!: string;
  @Column()
  public last_name_en!: string;
  @Column()
  public description!: string;
  @Column()
  public image_url!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", precision: 0 })
  readonly created_at!: Date;
  @UpdateDateColumn({ name: "updated_at", type: "timestamp", precision: 0 })
  readonly updated_at!: Date;

  protected name!: string;

  @AfterLoad()
  getName() {
    this.name = this.first_name_en + " " + this.last_name_en;
  }
}

export default Dancer;

import Performance from "./entities/Performance";
import Dancer from "./entities/Dancer";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [Performance, Dancer],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;

import Performance from "./entities/Performance";
import Dancer from "./entities/Dancer";
import { DataSource } from "typeorm";
import Theater from "./entities/Theater";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [Performance, Dancer, Theater],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;

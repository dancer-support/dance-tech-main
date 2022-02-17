import "./pre-start"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";

import "reflect-metadata";
import { createConnection } from "typeorm";

import dotenv from "dotenv";
dotenv.config();

if (process.env.PORT === "3000") {
  process.env.PORT = "4000";
}

createConnection({
  type: "postgres",
  host: "localhost",
  port: 3306,
  username: "admin",
  password: "admin",
  database: "test",
  entities: [__dirname + "/entities/*.ts"],
  synchronize: true,
})
  .then((connection) => {
    // here you can start to work with your entities
  })
  .catch((error) => console.log(error));

// Start the server
const port = Number(process.env.PORT);
app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});

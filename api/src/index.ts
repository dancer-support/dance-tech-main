import "./pre-start"; // Must be the first import
import app from "./app";
import logger from "./shared/Logger";
import dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";
import AppDataSource from "./data-source";

if (process.env.PORT === "3000") {
  process.env.PORT = "4000";
}

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  /* eslint no-console: 0 */
  .catch((error: Error) => console.log(error));

// Start the server
const port = Number(process.env.PORT);
app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});

import "./pre-start"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";
import dotenv from "dotenv";
dotenv.config();

if (process.env.PORT === "3000") {
  process.env.PORT = "4000";
}

// Start the server
const port = Number(process.env.PORT);
app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});

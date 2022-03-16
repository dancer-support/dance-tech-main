import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

import express from "express";

import swaggerUi from "swagger-ui-express";
import redoc from "redoc-express";
import swaggerDocument from "./doc/swagger.json";
import { RegisterRoutes } from "./doc/routes";

const app = express();

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

RegisterRoutes(app);

app.use("/dev/openapi.json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocument);
});
app.use(
  "/dev/schemas/swagger-ui",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
app.use(
  "/dev/schemas/redoc",
  redoc({ title: "Dance Engineering", specUrl: "/dev/openapi.json" })
);

export default app;

import { RequestHandler, Router } from "express";

import swaggerUi from "swagger-ui-express";
import redoc from "redoc-express";

import swaggerDocument from "../../doc/swagger.json";

const baseRouter = Router();

baseRouter.use("/openapi.json", function (_req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocument);
});
baseRouter.use(
  "/schemas/swagger-ui",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
baseRouter.use(
  "/schemas/redoc",
  redoc({
    title: "Dance Engineering",
    specUrl: "/dev/openapi.json",
  }) as RequestHandler<unknown, any, any, "", Record<string, any>>
);

export default baseRouter;

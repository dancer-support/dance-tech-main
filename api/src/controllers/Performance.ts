import { Controller, Post, Route, Body, SuccessResponse } from "tsoa";
import Performance from "../entities/Performance";
import {
  PerformanceCreationParams,
  PerformanceService,
} from "../services/Performance";

@Route("performance")
export class PerformanceController extends Controller {
  @SuccessResponse("201", "Created")
  @Post()
  public async createPerformance(
    @Body() requestBody: PerformanceCreationParams
  ): Promise<Performance> {
    this.setStatus(201);
    const performance = await new PerformanceService().create(requestBody);
    return performance;
  }
}

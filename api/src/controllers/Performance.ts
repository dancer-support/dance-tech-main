import {
  Controller,
  Get,
  Post,
  Path,
  Route,
  Body,
  SuccessResponse,
} from "tsoa";
import Performance from "../entities/Performance";
import {
  PerformanceCreationParams,
  PerformanceService,
} from "../services/Performance";

@Route("performance")
export class PerformanceController extends Controller {
  @Get("{id}")
  public async getPerformance(@Path() id: number): Promise<Performance | null> {
    const performance = await new PerformanceService().get(id);
    return performance;
  }

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

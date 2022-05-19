import { Controller, Get, Route, Path } from "tsoa";
import Performance from "../entities/Performance";
import { PerformancesService } from "../services/Performances";
import { PerformanceService } from "../services/Performance";

@Route("performances")
export class PerformancesController extends Controller {
  @Get()
  public async getPerformances(): Promise<Performance[] | null> {
    const performances = await new PerformancesService().get();
    return performances;
  }

  @Get("{id}")
  public async getPerformance(@Path() id: number): Promise<Performance | null> {
    const performance = await new PerformanceService().get(id);
    return performance;
  }
}

import { Controller, Get, Route } from "tsoa";
import Performance from "../entities/Performance";
import { PerformancesService } from "../services/Performances";

@Route("performances")
export class PerformancesController extends Controller {
  @Get()
  public async getPerformances(): Promise<Performance[] | null> {
    const performances = await new PerformancesService().get();
    return performances;
  }
}

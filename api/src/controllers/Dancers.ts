import { Controller, Get, Route, Path } from "tsoa";
import Dancer from "../entities/Dancer";
import { DancersService } from "../services/Dancers";
import { DancerService } from "../services/Dancer";

@Route("dancers")
export class DancersController extends Controller {
  @Get()
  public async getDancers(): Promise<Dancer[] | null> {
    const dancers = await new DancersService().get();
    return dancers;
  }

  @Get("{id}")
  public async getDancer(@Path() id: number): Promise<Dancer | null> {
    const dancer = await new DancerService().get(id);
    return dancer;
  }
}

import { Controller, Get, Route, Path } from "tsoa";
import Theater from "../entities/Theater";
import { TheatersService } from "../services/Theaters";
import { TheaterService } from "../services/Theater";

@Route("theaters")
export class TheatersController extends Controller {
  @Get()
  public async getTheaters(): Promise<Theater[] | null> {
    const theaters = await new TheatersService().get();
    return theaters;
  }

  @Get("{id}")
  public async getTheater(@Path() id: number): Promise<Theater | null> {
    const theater = await new TheaterService().get(id);
    return theater;
  }
}

import { Controller, Post, Route, Body, SuccessResponse } from "tsoa";
import Theater from "../entities/Theater";
import { TheaterCreationParams, TheaterService } from "../services/Theater";

@Route("theater")
export class TheaterController extends Controller {
  @SuccessResponse("201", "Created")
  @Post()
  public async createTheater(
    @Body() requestBody: TheaterCreationParams
  ): Promise<Theater> {
    this.setStatus(201);
    const theater = await new TheaterService().create(requestBody);
    return theater;
  }
}

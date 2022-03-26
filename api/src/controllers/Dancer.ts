import {
  Controller,
  Get,
  Post,
  Path,
  Route,
  Body,
  SuccessResponse,
} from "tsoa";
import Dancer from "../entities/Dancer";
import {
  DancerCreationParams,
  DancerService,
} from "../services/Dancer";

@Route("dancer")
export class DancerController extends Controller {
  @Get("{id}")
  public async getDancer(@Path() id: number): Promise<Dancer | null> {
    const dancer = await new DancerService().get(id);
    return dancer;
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createDancer(
    @Body() requestBody: DancerCreationParams
  ): Promise<Dancer> {
    this.setStatus(201);
    const dancer = await new DancerService().create(requestBody);
    return dancer;
  }
}

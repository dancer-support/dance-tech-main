import {
  Controller,
  Post,
  Route,
  Body,
  SuccessResponse,
} from "tsoa";
import Dancer from "../entities/Dancer";
import { DancerCreationParams, DancerService } from "../services/Dancer";

@Route("dancer")
export class DancerController extends Controller {
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

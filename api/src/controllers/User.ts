import {
  Controller,
  Get,
  Post,
  Path,
  Route,
  Body,
  SuccessResponse,
} from "tsoa";
import User from "../entities/User";
import { UserCreationParams, UserService } from "../services/User";

@Route("user")
export class UserController extends Controller {
  @Get("{userId}")
  public async getUser(@Path() userId: number): Promise<User | null> {
    const user = await new UserService().get(userId);
    return user;
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<User> {
    this.setStatus(201);
    const user = await new UserService().create(requestBody);
    return user;
  }
}

import { Controller, Get, Path, Query, Route } from "tsoa";
import User from "../entities/User";
import { UserService } from "../services/User";

@Route("users")
export class UserController extends Controller {
  @Get("{userId}")
  public getUser(@Path() userId: number, @Query() name?: string): User {
    return new UserService().get(userId, name);
  }

  // @SuccessResponse("201", "Created") // Custom success response
  // @Post()
  // public async createUser(
  //   @Body() requestBody: UserCreationParams
  // ): Promise<void> {
  //   this.setStatus(201); // set return status 201
  //   new UserService().create(requestBody);
  //   return;
  // }
}

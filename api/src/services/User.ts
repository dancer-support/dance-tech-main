import User from "../entities/User";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name">;

export class UserService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
    };
  }
}

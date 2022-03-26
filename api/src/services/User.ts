import AppDataSource from "../data-source";
import User from "../entities/User";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name">;

const userRepository = AppDataSource.getRepository(User);

export class UserService {
  public async get(id: number): Promise<User | null> {
    const user = await userRepository.findOneBy({ id });
    return user;
  }

  public async create(requestBody: UserCreationParams): Promise<User> {
    const { name, email } = requestBody;
    const user = new User();
    user.name = name;
    user.email = email || "";

    await userRepository.save(user);
    return user;
  }
}

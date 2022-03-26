import AppDataSource from "../data-source";
import Dancer from "../entities/Dancer";

const dancerRepository = AppDataSource.getRepository(Dancer);

export class DancersService {
  public async get(): Promise<Dancer[] | null> {
    const dancers = await dancerRepository.find();
    return dancers;
  }
}

import AppDataSource from "../data-source";
import Theater from "../entities/Theater";

const theaterRepository = AppDataSource.getRepository(Theater);

export class TheatersService {
  public async get(): Promise<Theater[] | null> {
    const theaters = await theaterRepository.find();
    return theaters;
  }
}

import AppDataSource from "../data-source";
import Theater from "../entities/Theater";

// A post request should not contain an id.
export type TheaterCreationParams = Pick<
  Theater,
  "name" | "location"
>;

const theaterRepository = AppDataSource.getRepository(Theater);

export class TheaterService {
  public async get(id: number): Promise<Theater | null> {
    const thaeter = await theaterRepository.findOneBy({ id });
    return thaeter;
  }

  public async create(requestBody: TheaterCreationParams): Promise<Theater> {
    const { name, location } = requestBody;
    const theater = new Theater();
    theater.name = name;
    theater.location = location;

    await theaterRepository.save(theater);
    return theater;
  }
}

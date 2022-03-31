import AppDataSource from "../data-source";
import Dancer from "../entities/Dancer";

// A post request should not contain an id.
export type DancerCreationParams = Pick<
  Dancer,
  "first_name_en" | "last_name_en" | "description" | "image_url"
>;

const dancerRepository = AppDataSource.getRepository(Dancer);

export class DancerService {
  public async get(id: number): Promise<Dancer | null> {
    const dancer = await dancerRepository.findOneBy({ id });
    return dancer;
  }

  public async create(requestBody: DancerCreationParams): Promise<Dancer> {
    const { first_name_en, last_name_en, description, image_url } = requestBody;
    const dancer = new Dancer();
    dancer.first_name_en = first_name_en;
    dancer.last_name_en = last_name_en;
    dancer.description = description;
    dancer.image_url = image_url;

    await dancerRepository.save(dancer);
    return dancer;
  }
}

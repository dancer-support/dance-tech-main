import AppDataSource from "../data-source";
import Performance from "../entities/Performance";
import Dancer from "../entities/Dancer";

// A post request should not contain an id.
export type PerformanceCreationParams = Pick<
  Performance,
  "title" | "description" | "image_url" | "start_at"
> & {
  dancer_ids?: number[];
};

const performanceRepository = AppDataSource.getRepository(Performance);
const dancerRepository = AppDataSource.getRepository(Dancer);

export class PerformanceService {
  public async get(id: number): Promise<Performance | null> {
    const performance = await performanceRepository.findOne({
      where: { id },
      relations: ["dancers"],
    });
    return performance;
  }

  public async create(
    requestBody: PerformanceCreationParams
  ): Promise<Performance> {
    const { title, description, image_url, start_at, dancer_ids } = requestBody;
    const performance = new Performance();
    performance.title = title || "";
    performance.description = description || "";
    performance.image_url = image_url || "";
    performance.start_at = start_at || "";

    if (Array.isArray(dancer_ids) && dancer_ids.length) {
      const dancers = (
        await Promise.all(
          dancer_ids?.map((dancerId) => {
            const id = Number(dancerId) || -1;
            return dancerRepository.findOneBy({ id });
          })
        )
      ).filter((dancer) => dancer !== null) as Dancer[];

      performance.dancers = dancers;
    }

    await performanceRepository.save(performance);
    return performance;
  }
}

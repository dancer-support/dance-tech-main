import AppDataSource from "../data-source";
import Performance from "../entities/Performance";

// A post request should not contain an id.
export type PerformanceCreationParams = Pick<Performance, "title">;

const performanceRepository = AppDataSource.getRepository(Performance);

export class PerformanceService {
  public async get(id: number): Promise<Performance | null> {
    const user = await performanceRepository.findOneBy({ id });
    return user;
  }

  public async create(
    requestBody: PerformanceCreationParams
  ): Promise<Performance> {
    const { title } = requestBody;
    const performance = new Performance();
    performance.title = title || "";

    await performanceRepository.save(performance);
    return performance;
  }
}

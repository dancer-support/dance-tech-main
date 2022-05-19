import AppDataSource from "../data-source";
import Performance from "../entities/Performance";

const performanceRepository = AppDataSource.getRepository(Performance);

export class PerformancesService {
  public async get(): Promise<Performance[] | null> {
    const performances = await performanceRepository.find({
      relations: ["dancers", "theater"],
      order: { start_at: "ASC" },
    });
    return performances;
  }
}

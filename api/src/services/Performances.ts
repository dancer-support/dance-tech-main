import AppDataSource from "../data-source";
import Performance from "../entities/Performance";

const performanceRepository = AppDataSource.getRepository(Performance);

export class PerformancesService {
  public async get(): Promise<Performance[] | null> {
    const performances = await performanceRepository.find();
    return performances;
  }
}

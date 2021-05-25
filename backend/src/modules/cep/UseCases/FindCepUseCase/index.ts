import { RedisCacheProvider } from "../../../shared/container/provider/cacheProvider/repositories/implementations/RedisCacheProvider";
import { CepRepository } from "../../repositories/implementations/CepRepository";
import { FindCepController } from "./FindCepController";
import { FindCepUseCase } from "./FindCepUseCase";

export default (): FindCepController => {
  const redisCacheProvider = new RedisCacheProvider();
  const cepRepository = new CepRepository();
  const findCepUseCase = new FindCepUseCase(cepRepository, redisCacheProvider);
  const findCepController = new FindCepController(findCepUseCase);

  return findCepController;
};

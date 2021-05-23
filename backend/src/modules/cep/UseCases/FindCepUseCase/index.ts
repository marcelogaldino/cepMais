import { CepRepository } from "../../repositories/implementations/CepRepository";
import { FindCepController } from "./FindCepController";
import { FindCepUseCase } from "./FindCepUseCase";

export default (): FindCepController => {
  const cepRepository = new CepRepository();
  const findCepUseCase = new FindCepUseCase(cepRepository);
  const findCepController = new FindCepController(findCepUseCase);

  return findCepController;
};

import { Router } from "express";

import findCepController from "../modules/cep/UseCases/FindCepUseCase";

const cepRoutes = Router();

cepRoutes.post("/", async (request, response) => {
  return findCepController().handle(request, response);
});

export { cepRoutes };

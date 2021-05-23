import { Request, Response } from "express";

import { FindCepUseCase } from "./FindCepUseCase";

class FindCepController {
  constructor(private findCepUseCase: FindCepUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { requestCep } = request.body;

    const cepData = await this.findCepUseCase.execute({ requestCep });

    return response.json(cepData);
  }
}

export { FindCepController };

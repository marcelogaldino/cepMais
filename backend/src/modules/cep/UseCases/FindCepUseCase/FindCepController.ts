import { Request, Response } from "express";

import { FindCepUseCase } from "./FindCepUseCase";

class FindCepController {
  constructor(private findCepUseCase: FindCepUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { requestCep } = request.body;

      const cepData = await this.findCepUseCase.execute({ requestCep });

      return response.json(cepData);
    } catch (error) {
      return response.status(400).send();
    }
  }
}

export { FindCepController };

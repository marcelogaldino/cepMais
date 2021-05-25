// import Redis from "ioredis";

import api from "../../../../utils/api";
import { ICacheProvider } from "../../../shared/container/provider/cacheProvider/repositories/ICacheProvider";
import { Cep } from "../../entities/Cep";
import { ICepRepository } from "../../repositories/ICepRepository";

interface IRequest {
  requestCep: string;
}

class FindCepUseCase {
  constructor(
    private cepRepository: ICepRepository,
    private cacheProvider: ICacheProvider
  ) {}

  async execute({ requestCep }: IRequest): Promise<Cep> {
    const formatedCep = requestCep.replace("-", "");

    const isCepDataCached = await this.cacheProvider.get(
      `cep-data:${formatedCep}`
    );

    if (!isCepDataCached) {
      const res = await api.get(`${formatedCep}/json`);

      const { data } = res;

      data.cep = data.cep.replace("-", "");

      const dataCepSave = await this.cepRepository.create({
        data,
      });

      await this.cacheProvider.save(
        `cep-data:${formatedCep}`,
        JSON.stringify(dataCepSave)
      );

      return dataCepSave;
    }

    return JSON.parse(isCepDataCached);
  }
}

export { FindCepUseCase };

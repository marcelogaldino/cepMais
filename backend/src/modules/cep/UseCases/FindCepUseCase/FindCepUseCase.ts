import Redis from "ioredis";

import api from "../../../../utils/api";
import { Cep } from "../../entities/Cep";
import { ICepRepository } from "../../repositories/ICepRepository";

interface IRequest {
  requestCep: string;
}

class FindCepUseCase {
  constructor(private cepRepository: ICepRepository) {}

  async execute({ requestCep }: IRequest): Promise<Cep> {
    const redis = new Redis({
      host: "redis_cepMais",
      port: 6379,
      password: "RedisCepMais",
    });

    const isCepDataCached = await redis.get(`cep-data:${requestCep}`);

    if (!isCepDataCached) {
      const res = await api.get(`${requestCep}/json`);

      const { data } = res;

      data.cep = data.cep.replace("-", "");

      const dataCepSave = await this.cepRepository.create({
        data,
      });

      await redis.set(`cep-data:${requestCep}`, JSON.stringify(dataCepSave));

      return dataCepSave;
    }

    return JSON.parse(isCepDataCached);
  }
}

export { FindCepUseCase };

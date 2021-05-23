import { getRepository, Repository } from "typeorm";

import { Cep } from "../../entities/Cep";
import { ICepRepository, ICreateCepDTO } from "../ICepRepository";

class CepRepository implements ICepRepository {
  private repository: Repository<Cep>;

  constructor() {
    this.repository = getRepository(Cep);
  }

  async create({ data }: ICreateCepDTO): Promise<Cep> {
    const {
      cep,
      logradouro,
      bairro,
      complemento,
      localidade,
      uf,
      ddd,
      gia,
      ibge,
      siafi,
    } = data;

    const dadosCep = this.repository.create({
      cep,
      logradouro,
      bairro,
      complemento,
      localidade,
      uf,
      ddd,
      gia,
      ibge,
      siafi,
    });

    const dataCep = await this.repository.save(dadosCep);
    return dataCep;
  }

  async findByCep(cep: string): Promise<Cep> {
    const findCep = await this.repository.findOne({ cep });
    return findCep;
  }
}

export { CepRepository };

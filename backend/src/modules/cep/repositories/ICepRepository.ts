import { Cep } from "../entities/Cep";

interface IDataCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface ICreateCepDTO {
  data: IDataCep;
}

interface ICepRepository {
  findByCep(apiCep: string): Promise<Cep>;
  create({ data }: ICreateCepDTO): Promise<Cep>;
}

export { ICepRepository, ICreateCepDTO };

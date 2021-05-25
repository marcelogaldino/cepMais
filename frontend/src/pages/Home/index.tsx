import React, { useState, useEffect, FormEvent, useCallback } from 'react';

import { FiSearch } from 'react-icons/fi';
import HashLoader from 'react-spinners/HashLoader';

import api from '../../services/api';
import Header from '../components/header';

import {
  Title,
  Form,
  Card,
  CardHistory,
  TitleHistory,
  Error,
  ContainerLoader,
} from './styles';

interface IDataCep {
  id: string;
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

const Home: React.FC = () => {
  const [isLoading, setisLoading] = useState(false);
  const [cep, setCep] = useState('');
  const [inputError, setInputError] = useState('');
  const [dataCep, setDataCep] = useState<IDataCep>();
  const [listDataCep, setListDataCep] = useState<IDataCep[]>(() => {
    const cepStoraged = localStorage.getItem('@cepMais:cep');

    if (cepStoraged) {
      return JSON.parse(cepStoraged);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@cepMais:cep', JSON.stringify(listDataCep));
  }, [listDataCep]);

  const handleAddCep = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (!cep) {
        setInputError('Informe um CEP para realizar sua busca');
        return;
      }

      try {
        setisLoading(true);
        const response = await api.post('/cep', { requestCep: cep });

        const dataCepFromApi = response.data;

        setDataCep(dataCepFromApi);

        const isCepAlreadySearched = listDataCep.some(
          cepData => cepData.cep === dataCepFromApi.cep,
        );

        if (!isCepAlreadySearched)
          setListDataCep([dataCepFromApi, ...listDataCep]);

        setCep('');
        setInputError('');
        setisLoading(false);
      } catch (error) {
        setisLoading(false);
        setInputError('Erro ao digitar o CEP. Verifique se é um CEP válido');
      }
    },
    [cep, listDataCep],
  );

  return (
    <>
      <Header />
      <Title>Busque seu CEP</Title>

      <Form hasError={!!inputError} onSubmit={handleAddCep}>
        <input
          value={cep}
          onChange={e => setCep(e.target.value)}
          placeholder="Informe um CEP. Ex: 01001000 ou 01001-000"
        />
        <button type="submit">
          Buscar <FiSearch />{' '}
        </button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {isLoading ? (
        <ContainerLoader>
          <HashLoader color="blue" size={40} />
        </ContainerLoader>
      ) : (
        <Card>
          {dataCep && (
            <a key={dataCep.id} href="maps">
              <ul>
                <div>
                  <li>
                    CEP: <span>{dataCep.cep}</span>{' '}
                  </li>
                  <li>
                    Bairro: <span>{dataCep.bairro}</span>{' '}
                  </li>
                  <li>
                    Complemento: <span>{dataCep.complemento}</span>{' '}
                  </li>
                  <li>
                    Localidade: <span>{dataCep.localidade}</span>{' '}
                  </li>
                  <li>
                    Logradouro: <span>{dataCep.logradouro}</span>{' '}
                  </li>
                </div>
                <div>
                  <li>
                    UF: <span>{dataCep.uf}</span>
                  </li>
                  <li>
                    DDD: <span>{dataCep.ddd}</span>{' '}
                  </li>
                  <li>
                    IBGE: <span>{dataCep.ibge}</span>{' '}
                  </li>
                  <li>
                    GIA: <span>{dataCep.gia}</span>
                  </li>
                  <li>
                    SIAFI: <span>{dataCep.siafi}</span>
                  </li>
                </div>
              </ul>
            </a>
          )}
        </Card>
      )}

      <TitleHistory>Histórico de consultas</TitleHistory>

      <CardHistory>
        {listDataCep.map(cepData => (
          <a key={cepData.id} href="maps">
            <ul>
              <div>
                <li>
                  CEP: <span>{cepData.cep}</span>{' '}
                </li>
                <li>
                  Bairro: <span>{cepData.bairro}</span>{' '}
                </li>
                <li>
                  Complemento: <span>{cepData.complemento}</span>{' '}
                </li>
                <li>
                  Localidade: <span>{cepData.localidade}</span>{' '}
                </li>
                <li>
                  Logradouro: <span>{cepData.logradouro}</span>{' '}
                </li>
              </div>
              <div>
                <li>
                  UF: <span>{cepData.uf}</span>
                </li>
                <li>
                  DDD: <span>{cepData.ddd}</span>{' '}
                </li>
                <li>
                  IBGE: <span>{cepData.ibge}</span>{' '}
                </li>
                <li>
                  GIA: <span>{cepData.gia}</span>
                </li>
                <li>
                  SIAFI: <span>{cepData.siafi}</span>
                </li>
              </div>
            </ul>
          </a>
        ))}
      </CardHistory>
    </>
  );
};

export default Home;

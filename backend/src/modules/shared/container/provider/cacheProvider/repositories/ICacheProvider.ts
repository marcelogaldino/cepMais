interface ICacheProvider {
  save(key: string, value: string): Promise<void>;
  get(key: string): Promise<string>;
}

export { ICacheProvider };

import { RedisCacheProvider } from "./repositories/implementations/RedisCacheProvider";

export default (): RedisCacheProvider => {
  const redisCacheProvider = new RedisCacheProvider();

  return redisCacheProvider;
};

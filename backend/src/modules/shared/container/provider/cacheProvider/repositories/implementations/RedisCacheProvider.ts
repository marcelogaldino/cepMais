import Redis, { Redis as RedisClient } from "ioredis";

import cacheConfig from "../../../../../../../cache";
import { ICacheProvider } from "../ICacheProvider";

class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient;
  constructor() {
    this.client = new Redis(cacheConfig);
  }

  async save(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  async get(key: string): Promise<string> {
    const data = await this.client.get(key);

    return data;
  }
}

export { RedisCacheProvider };

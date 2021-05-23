import Redis from "ioredis";

// eslint-disable-next-line no-new
new Redis({
  host: "redis_cepMais",
  port: 6379,
  password: "RedisCepMais",
});

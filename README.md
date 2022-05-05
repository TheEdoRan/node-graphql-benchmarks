# Benchmarks
duration: 5s
connections: 5
pipelining: 1

| Server                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                               | --:        | :-:     | --:           |
| [go-graphql](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/go-graphql.js)             | 69644.8    | 0.01    | 115.69        |
| [yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify-jit.js) | 7494.8     | 0.17    | 51.25         |
| [yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express-jit.js) | 6770.8     | 0.28    | 46.45         |
| [yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify.js)         | 5536.4     | 0.28    | 37.85         |
| [yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express.js)         | 4758.0     | 0.37    | 32.64         |
| [apollo](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo.js)                     | 3813.0     | 0.64    | 26.29         |

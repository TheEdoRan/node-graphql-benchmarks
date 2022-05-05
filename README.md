# Benchmarks

duration: 5s

connections: 5

pipelining: 1


| Server                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                               | --:        | :-:     | --:           |
| [go-graphql](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/go-graphql.js)             | 72377.6    | 0.01    | 120.24        |
| [yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify-jit.js) | 7530.0     | 0.17    | 51.49         |
| [yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express-jit.js) | 6847.6     | 0.28    | 46.98         |
| [yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify.js)         | 5570.0     | 0.28    | 38.09         |
| [yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express.js)         | 5138.0     | 0.33    | 35.25         |
| [apollo](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo.js)                     | 3835.0     | 0.62    | 26.45         |

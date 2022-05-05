# Benchmarks

duration: 5s

connections: 5

pipelining: 1


| Server                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                               | --:        | :-:     | --:           |
| [yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify-jit.js) | 13468.0    | 0.02    | 55.92         |
| [yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express-jit.js) | 11554.4    | 0.03    | 48.23         |
| [mercurius](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/mercurius.js)               | 10469.6    | 0.03    | 43.09         |
| [yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify.js)         | 8078.0     | 0.07    | 33.55         |
| [yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express.js)         | 7508.4     | 0.12    | 31.34         |
| [apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo-fastify.js)     | 6426.0     | 0.25    | 26.65         |
| [apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo-express.js)     | 4984.4     | 0.37    | 20.99         |

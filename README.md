# Benchmarks

duration: 5s

connections: 5

pipelining: 1


| Server                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                               | --:        | :-:     | --:           |
| [gqlgen](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/gqlgen.js)                     | 68496.0    | 0.01    | 113.79        |
| [yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify-jit.js) | 11980.0    | 0.02    | 81.02         |
| [yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express-jit.js) | 10080.8    | 0.04    | 68.39         |
| [yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify.js)         | 7736.4     | 0.09    | 52.32         |
| [yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express.js)         | 6116.4     | 0.33    | 41.50         |
| [apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo-fastify.js)     | 6079.6     | 0.25    | 41.07         |
| [apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo-express.js)     | 4724.4     | 0.41    | 32.22         |

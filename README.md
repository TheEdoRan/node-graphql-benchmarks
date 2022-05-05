# Benchmarks

duration: 5s

connections: 5

pipelining: 1


| Server                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                               | --:        | :-:     | --:           |
| [gqlgen](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/gqlgen.js)                     | 70662.4    | 0.01    | 117.39        |
| [yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify-jit.js) | 12424.8    | 0.04    | 51.60         |
| [yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express-jit.js) | 11466.4    | 0.03    | 47.87         |
| [yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify.js)         | 8030.0     | 0.07    | 33.35         |
| [yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express.js)         | 7484.4     | 0.13    | 31.25         |
| [apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo-fastify.js)     | 6426.0     | 0.26    | 26.63         |
| [apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo-express.js)     | 4871.6     | 0.39    | 20.51         |

# Benchmarks

duration: 5s

connections: 5

pipelining: 1


| Server                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                               | --:        | :-:     | --:           |
| [gqlgen](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/gqlgen.js)                     | 71276.8    | 0.01    | 118.38        |
| [yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify-jit.js) | 7419.6     | 0.19    | 50.75         |
| [yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express-jit.js) | 6698.8     | 0.28    | 45.95         |
| [yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-express.js)         | 5093.2     | 0.34    | 34.93         |
| [yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/yoga-fastify.js)         | 5027.6     | 0.36    | 34.38         |
| [apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo-fastify.js)     | 4462.0     | 0.46    | 30.47         |
| [apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/apollo-express.js)     | 3731.0     | 0.77    | 25.72         |

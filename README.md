# Benchmarks

duration: 5s

connections: 5

pipelining: 1


| Server                                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                               | --:        | :-:     | --:           |
| [cluster-yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-yoga-fastify-jit.js) | 28737.6    | 0.01    | 119.34        |
| [cluster-mercurius](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-mercurius.js)               | 27300.8    | 0.01    | 112.33        |
| [cluster-yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-yoga-express-jit.js) | 25275.2    | 0.01    | 105.51        |
| [cluster-yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-yoga-fastify.js)         | 21998.4    | 0.01    | 91.33         |
| [cluster-yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-yoga-express.js)         | 19394.4    | 0.01    | 80.94         |
| [cluster-apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-apollo-fastify.js)     | 17623.2    | 0.02    | 73.07         |
| [single-yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-yoga-fastify-jit.js)   | 14021.6    | 0.02    | 58.22         |
| [cluster-apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-apollo-express.js)     | 13770.4    | 0.02    | 57.98         |
| [single-yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-yoga-express-jit.js)   | 11640.8    | 0.03    | 48.59         |
| [single-mercurius](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-mercurius.js)                 | 10543.2    | 0.02    | 43.38         |
| [single-yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-yoga-fastify.js)           | 8439.6     | 0.04    | 35.05         |
| [single-yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-yoga-express.js)           | 6607.6     | 0.30    | 27.58         |
| [single-apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-apollo-fastify.js)       | 6314.0     | 0.25    | 26.17         |
| [single-apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-apollo-express.js)       | 4783.6     | 0.40    | 20.14         |

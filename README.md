# Benchmarks

duration: 5s

connections: 5

pipelining: 1


| Server                                                                                                                                         | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                            | --:        | :-:     | --:           |
| [cluster-yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-yoga-fastify-jit.js)             | 28030.4    | 0.01    | 116.38        |
| [cluster-yoga-fastify-jit-cache](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-yoga-fastify-jit-cache.js) | 27588.8    | 0.01    | 114.57        |
| [cluster-mercurius](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-mercurius.js)                           | 26904.0    | 0.01    | 110.73        |
| [cluster-yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-yoga-express-jit.js)             | 24040.0    | 0.02    | 100.36        |
| [cluster-apollo-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-apollo-fastify-jit.js)         | 21537.6    | 0.01    | 89.31         |
| [cluster-yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-yoga-fastify.js)                     | 21160.0    | 0.01    | 87.88         |
| [cluster-yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-yoga-express.js)                     | 19144.8    | 0.01    | 79.90         |
| [cluster-apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-apollo-fastify.js)                 | 17506.4    | 0.02    | 72.56         |
| [cluster-apollo-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-apollo-express-jit.js)         | 15833.6    | 0.02    | 66.65         |
| [single-yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/single-yoga-fastify-jit.js)               | 13375.2    | 0.02    | 55.54         |
| [cluster-apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/cluster-apollo-express.js)                 | 13343.2    | 0.02    | 56.18         |
| [single-yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/single-yoga-express-jit.js)               | 11109.6    | 0.03    | 46.38         |
| [single-mercurius](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/single-mercurius.js)                             | 8922.4     | 0.07    | 36.72         |
| [single-apollo-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/single-apollo-fastify-jit.js)           | 8490.0     | 0.05    | 35.20         |
| [single-yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/single-yoga-express.js)                       | 7292.4     | 0.20    | 30.44         |
| [single-yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/single-yoga-fastify.js)                       | 7272.4     | 0.16    | 30.20         |
| [single-apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/single-apollo-fastify.js)                   | 6254.0     | 0.24    | 25.92         |
| [single-apollo-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/single-apollo-express-jit.js)           | 6029.2     | 0.31    | 25.38         |
| [single-apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/blob/no-go/benchmarks/single-apollo-express.js)                   | 4794.0     | 0.39    | 20.18         |

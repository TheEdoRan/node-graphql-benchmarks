# Benchmarks

duration: 5s

connections: 5

pipelining: 1


| Server                                                                                                                                | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                   | --:        | :-:     | --:           |
| [cluster-yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-yoga-fastify-jit.js)     | 27108.8    | 0.01    | 112.58        |
| [cluster-mercurius](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-mercurius.js)                   | 26638.4    | 0.01    | 109.62        |
| [cluster-apollo-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-apollo-fastify-jit.js) | 22625.6    | 0.01    | 6.75          |
| [cluster-yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-yoga-express-jit.js)     | 21947.2    | 0.02    | 91.61         |
| [cluster-yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-yoga-fastify.js)             | 21144.0    | 0.01    | 87.79         |
| [cluster-yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-yoga-express.js)             | 18980.0    | 0.01    | 79.23         |
| [cluster-apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-apollo-fastify.js)         | 17228.0    | 0.02    | 71.42         |
| [cluster-apollo-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-apollo-express-jit.js) | 15888.8    | 0.02    | 5.74          |
| [single-yoga-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-yoga-fastify-jit.js)       | 13277.6    | 0.02    | 55.14         |
| [cluster-apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/cluster-apollo-express.js)         | 12888.8    | 0.02    | 54.27         |
| [single-yoga-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-yoga-express-jit.js)       | 11250.4    | 0.03    | 46.95         |
| [single-apollo-fastify-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-apollo-fastify-jit.js)   | 10754.4    | 0.03    | 3.21          |
| [single-mercurius](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-mercurius.js)                     | 10160.8    | 0.03    | 41.80         |
| [single-yoga-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-yoga-fastify.js)               | 7998.8     | 0.07    | 33.21         |
| [single-yoga-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-yoga-express.js)               | 7191.6     | 0.22    | 30.02         |
| [single-apollo-express-jit](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-apollo-express-jit.js)   | 7186.0     | 0.21    | 2.60          |
| [single-apollo-fastify](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-apollo-fastify.js)           | 6127.6     | 0.25    | 25.40         |
| [single-apollo-express](https://github.com/TheEdoRan/node-graphql-benchmarks/tree/main/benchmarks/single-apollo-express.js)           | 4789.2     | 0.39    | 20.16         |
